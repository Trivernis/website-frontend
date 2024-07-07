import NekoGif from "./neko.gif";
import spritesets from "./spritesets";

type Position = {
	x: number;
	y: number;
};

export default class NekoController {
	/**
	 * Status of the neko. If it is awake or not.
	 *
	 * @default true
	 * @readonly
	 *
	 * can be changed with wake() and sleep() methods.
	 */
	public isAwake = true;

	private nekoEl: HTMLDivElement;
	private nekoPosX = 16;
	private nekoPosY = 16;
	private mousePosX = 16;
	private mousePosY = 16;
	private mousePosAbs: Position = { x: 0, y: 0 };

	private isReduced: boolean = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	private mouseMoveController = new AbortController();
	private touchController = new AbortController();

	private frameCount = 0;
	private idleTime = 0;
	private idleAnimation: string | null = null;
	private idleAnimationFrame = 0;
	private nekoSpeed = 10;

	private distanceFromMouse = 25;

	private spriteSets: {
		[key: string]: number[][];
	} = spritesets;

	private parent: HTMLElement = document.body;

	constructor(
		element: HTMLDivElement,
		parent: HTMLElement,
		options?: {
			speed?: number | null;
			defaultState?: "awake" | "sleep";
		},
	) {
		this.nekoEl = element;
		this.parent = parent;
		// get element with attribute data-neko
		const isNekoAlive = document.querySelector("[data-neko]") as HTMLDivElement;
		if (this.isReduced || isNekoAlive) {
			return;
		}

		if (options?.speed) {
			this.nekoSpeed = Math.max(Math.min(options.speed, 60), 1);
		}

		this.nekoPosX = 0;
		this.nekoPosY = 0;

		this.mousePosX = 0;
		this.mousePosY = 0;

		if (options?.defaultState === "sleep") {
			this.isAwake = false;
		}

		this.create();
	}

	private getOffset() {
		return 3;
	}

	private create() {
		this.nekoEl.id = "neko";
		this.nekoEl.style.left = `${this.nekoPosX - 16}px`;
		this.nekoEl.style.top = `${this.nekoPosY - 16}px`;

		this.nekoEl.style.backgroundImage = `url(${NekoGif})`;

		(window as any).nekoInterval = setInterval(this.frame.bind(this), 60);

		this.nekoEl.addEventListener("click", () => {
			console.log("neko click");
			if (this.isAwake) {
				this.sleep();
			} else {
				this.wake();
			}
		});

		if (!this.isAwake) {
			this.idle();
			return;
		}

		this.attachListeners();
	}

	private setSprite(name: string, frame: number) {
		if (!this.nekoEl || !this.spriteSets || !this.spriteSets[name]) {
			return;
		}
		const sprite = this.spriteSets[name][frame % this.spriteSets[name].length];

		this.nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
			sprite[1] * 32
		}px`;
	}

	private resetIdleAnimation() {
		this.idleAnimation = null;
		this.idleAnimationFrame = 0;
	}

	private idle() {
		this.idleTime += 1;

		// every ~20 seconds
		if (
			this.idleTime > 5 &&
			Math.floor(Math.random() * 100) === 0 &&
			this.idleAnimation == null
		) {
			const availableIdleAnimations = ["sleeping", "scratchSelf"];

			if (this.nekoPosX < 32) {
				availableIdleAnimations.push("scratchWallW");
			}
			if (this.nekoPosY < 32) {
				availableIdleAnimations.push("scratchWallN");
			}
			if (this.nekoPosX > window.innerWidth - 32) {
				availableIdleAnimations.push("scratchWallE");
			}
			if (this.nekoPosY > window.innerHeight - 32) {
				availableIdleAnimations.push("scratchWallS");
			}
			this.idleAnimation =
				availableIdleAnimations[
					Math.floor(Math.random() * availableIdleAnimations.length)
				];
		}

		switch (this.idleAnimation) {
			case "sleeping":
				if (this.idleAnimationFrame < 8) {
					this.setSprite("tired", 0);
					break;
				}
				this.setSprite("sleeping", Math.floor(this.idleAnimationFrame / 4));
				if (this.idleAnimationFrame > 192) {
					this.resetIdleAnimation();
				}
				break;
			case "scratchWallN":
			case "scratchWallS":
			case "scratchWallE":
			case "scratchWallW":
			case "scratchSelf":
				this.setSprite(this.idleAnimation, this.idleAnimationFrame);
				if (this.idleAnimationFrame > 9) {
					this.resetIdleAnimation();
				}
				break;
			default:
				this.setSprite("idle", 0);
				return;
		}
		this.idleAnimationFrame += 1;
	}

	private frame() {
		this.frameCount += 1;
		const diffX = this.nekoPosX - this.mousePosX;
		const diffY = this.nekoPosY - this.mousePosY;
		const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

		if (
			this.isAwake &&
			(distance < this.nekoSpeed || distance < this.distanceFromMouse)
		) {
			this.idle();
			return;
		}
		if (!this.isAwake && distance < this.nekoSpeed) {
			this.idle();
			this.nekoEl.style.left = "-16px";
			this.nekoEl.style.top = "-16px";
			return;
		}

		this.idleAnimation = null;
		this.idleAnimationFrame = 0;

		if (this.idleTime > 1) {
			this.setSprite("alert", 0);
			// count down after being alerted before moving
			this.idleTime = Math.min(this.idleTime, 7);
			this.idleTime -= 1;
			return;
		}

		let direction: string;

		direction = diffY / distance > 0.5 ? "N" : "";
		direction += diffY / distance < -0.5 ? "S" : "";
		direction += diffX / distance > 0.5 ? "W" : "";
		direction += diffX / distance < -0.5 ? "E" : "";

		this.setSprite(direction, this.frameCount);

		this.nekoPosX -= (diffX / distance) * this.nekoSpeed;
		this.nekoPosY -= (diffY / distance) * this.nekoSpeed;

		this.nekoEl.style.left = `${this.nekoPosX - 16}px`;
		this.nekoEl.style.top = `${this.nekoPosY - 16}px`;
	}

	/**
	 * If id is not provided, it will try to destroy the neko associated with this instance.
	 * @param {number} id
	 * @returns {void}
	 * @example
	 * const neko = new Neko({
	 *    nekoId: 1,
	 * });
	 *
	 * neko.destroy();
	 *
	 */
	public destroy() {
		const neko = document.querySelector(`[data-neko="neko"]`);

		if (neko) {
			neko.remove();
			clearInterval((window as any).nekoInterval);

			if (this.nekoEl) {
				this.nekoEl.remove();
			}
		}
	}

	/**
	 * Put the neko to sleep. It will stop listening to mousemove and touchmove events and neko will return to its origin(+/- some random pixels).
	 *
	 * @returns {void}
	 * @example
	 * const neko = new Neko();
	 *
	 * neko.sleep();
	 */
	public sleep() {
		if (!this.isAwake) return;

		this.mouseMoveController.abort();
		this.touchController.abort();

		this.mousePosX = 0;
		this.mousePosY = 0;

		this.isAwake = false;
	}

	/**
	 * Wake up the neko. It will start listening to mousemove and touchmove events.
	 * @returns {void}
	 * @example
	 * const neko = new Neko();
	 * neko.wake();
	 */
	public wake() {
		if (this.isAwake) return;

		this.isAwake = true;

		this.attachListeners();
	}

	private attachListeners() {
		this.mouseMoveController = new AbortController();
		this.touchController = new AbortController();

		document.addEventListener(
			"scroll",
			() => {
				this.updateMousePosition();
			},
			{ signal: this.mouseMoveController.signal },
		);

		document.addEventListener(
			"mouseout",
			(event: MouseEvent) => {
				this.mousePosX = 0;
				this.mousePosY = 0;
			},
			{ signal: this.mouseMoveController.signal },
		);

		document.addEventListener(
			"mousemove",
			(event: MouseEvent) => {
				this.mousePosAbs = {
					x: event.clientX,
					y: event.clientY,
				};
				this.updateMousePosition();
			},
			{ signal: this.mouseMoveController.signal },
		);

		document.addEventListener(
			"touchmove",
			(event: TouchEvent) => {
				this.mousePosAbs = {
					x: event.touches[0].clientX,
					y: event.touches[0].clientY,
				};
				this.updateMousePosition();
			},
			{ signal: this.touchController.signal },
		);
	}

	private updateMousePosition() {
		const relativePosition = this.translateRelativePosition(this.mousePosAbs);
		this.mousePosX = relativePosition.x;
		this.mousePosY = relativePosition.y;
	}

	private translateRelativePosition({ x, y }: Position): Position {
		const parentPosition = this.getParentPosition();

		return {
			x: x - parentPosition.x,
			y: y - parentPosition.y,
		};
	}

	private getParentPosition(): { x: number; y: number } {
		const parentPosition = this.parent.getBoundingClientRect();
		return { x: parentPosition.x, y: parentPosition.y };
	}
}
