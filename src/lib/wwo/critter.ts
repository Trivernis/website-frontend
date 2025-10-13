export type Critter = {
	id: string;
	team: number;
	pos: Position;
	health: number;
};

export type Position = {
	x: number;
	y: number;
};

export type World = {
	critters: Critter[];
	damages: Record<string, number>;
	populationCount: Record<number, number>;
};

const BASE_ATK_DMG = 10;
const MAX_HEALTH = 100;
const HEAL_AMT = 1;
const BASE_MVM_SPD = 1;
const ATK_RANGE = 3;
const CELL_DIV_PROB_BASE = 0.1;

export function tickCritter(
	critter: Critter,
	world: World,
	delta: number,
): Critter {
	const closestCritters = crittersInRange(critter.pos, ATK_RANGE, world);
	const closestEnemies = closestCritters.filter((c) => c.team !== critter.team);
	const closestAllies = closestCritters.filter((c) => c.team === critter.team);

	let moveMode = "enemy";
	let atkProb = 0;

	if (closestEnemies.length > 0) {
		if (closestEnemies.length > closestAllies.length) {
			moveMode = "flee";
			atkProb *= closestAllies.length / closestEnemies.length;
		} else if (closestEnemies.length === closestAllies.length) {
			moveMode = "ally";
			const enemyHealth = closestEnemies.reduce((acc, c) => acc + c.health, 0);
			const allyHealth = closestAllies.reduce((acc, c) => acc + c.health, 0);
			atkProb *= allyHealth / enemyHealth;
		} else {
			atkProb = 0.8;
		}
	}

	let action = "move";

	if (Math.random() <= atkProb) {
		action = "attack";
	}

	if (action === "attack") {
		const baseDmg = BASE_ATK_DMG * (critter.health / MAX_HEALTH);

		for (const enemy of closestEnemies) {
			world.damages[enemy.id] =
				(1 - distance(critter.pos, enemy.pos) / ATK_RANGE) * baseDmg;
		}
		return critter;
	}

	critter.health = Math.min(critter.health + HEAL_AMT, 100);

	// cell division
	if (
		critter.health > 90 &&
		Math.random() <=
			CELL_DIV_PROB_BASE * (1 - world.populationCount[critter.team] / 100)
	) {
		world.critters.push({
			...critter,
			health: critter.health / 3,
			id: `${critter.id}-c${Date.now()}`,
		});
		critter.health /= 3;
	}

	if (moveMode === "enemy") {
		const closestEnemy = world.critters
			.filter((c) => c.team !== critter.team)
			.sort(
				(a, b) => distance(critter.pos, a.pos) - distance(critter.pos, b.pos),
			)[0];

		if (closestEnemy) {
			return move(critter, closestEnemy.pos, delta);
		}
	} else if (moveMode === "flee") {
		const closestEnemy = world.critters
			.filter((c) => c.team !== critter.team)
			.sort(
				(a, b) => distance(critter.pos, a.pos) - distance(critter.pos, b.pos),
			)[0];
		if (closestEnemy) {
			return move(critter, closestEnemy.pos, delta, true);
		}
	} else {
		const closestAlly = world.critters
			.filter((c) => c.team === critter.team)
			.sort(
				(a, b) => distance(critter.pos, a.pos) - distance(critter.pos, b.pos),
			)[0];

		if (closestAlly) {
			return move(critter, closestAlly.pos, delta);
		} else {
			const closestEnemy = world.critters
				.filter((c) => c.team !== critter.team)
				.sort(
					(a, b) => distance(critter.pos, a.pos) - distance(critter.pos, b.pos),
				)[0];
			if (closestEnemy) {
				return move(critter, closestEnemy.pos, delta, true);
			}
		}
	}

	return critter;
}

function move(
	critter: Critter,
	target: Position,
	delta: number,
	negate: boolean = false,
): Critter {
	const dstX = target.x - critter.pos.x;
	const dstY = target.y - critter.pos.y;

	let speedX = dstX / Math.abs(dstX);
	let speedY = dstY / Math.abs(dstY);

	if (Math.abs(speedX) > 0 && Math.abs(speedY) > 0) {
		speedX = speedX * Math.sqrt(2);
		speedY = speedY * Math.sqrt(2);
	}

	speedX *= (critter.health / MAX_HEALTH) * BASE_MVM_SPD * delta;
	speedY *= (critter.health / MAX_HEALTH) * BASE_MVM_SPD * delta;

	if (Number.isNaN(speedX)) {
		speedX = 0;
	}
	if (Number.isNaN(speedY)) {
		speedY = 0;
	}

	if (negate) {
		speedX *= -1;
		speedY *= -1;
	}

	return {
		...critter,
		pos: {
			x: clamp(critter.pos.x + speedX, 0, 100),
			y: clamp(critter.pos.y + speedY, 0, 100),
		},
	};
}

function crittersInRange(
	pos: Position,
	range: number,
	world: World,
): Critter[] {
	return world.critters.filter((c) => Math.abs(distance(pos, c.pos)) <= range);
}

function clamp(num: number, min: number, max: number): number {
	return Math.max(Math.min(num, max), min);
}

function distance(pos1: Position, pos2: Position): number {
	return Math.sqrt(
		Math.abs(pos2.x - pos1.x) ** 2 + Math.abs(pos2.y - pos1.y) ** 2,
	);
}
