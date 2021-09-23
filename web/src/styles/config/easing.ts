/**
 * Check out: https://easings.net/
 */

export const easeTiming = {
	easeInQuad: [0.55, 0.085, 0.68, 0.53],
	easeOutQuad: [0.25, 0.46, 0.45, 0.94],
	easeInCubic: [0.55, 0.055, 0.675, 0.19],
	easeOutCubic: [0.215, 0.61, 0.355, 1],
	easeInQuart: [0.895, 0.03, 0.685, 0.22],
	easeOutQuart: [0.165, 0.84, 0.44, 1],
	easeInQuint: [0.755, 0.05, 0.855, 0.06],
	easeOutQuint: [0.23, 1, 0.32, 1],
	easeInSine: [0.47, 0, 0.745, 0.715],
	easeOutSine: [0.39, 0.575, 0.565, 1],
	easeInExpo: [0.95, 0.05, 0.795, 0.035],
	easeOutExpo: [0.19, 1, 0.22, 1],
	easeInCirc: [0.6, 0.04, 0.98, 0.335],
	easeOutCirc: [0.075, 0.82, 0.165, 1],
	easeInBack: [0.6, -0.28, 0.735, 0.045],
	easeOutBack: [0.175, 0.885, 0.32, 1.275],
	easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
	easeInOutCubic: [0.645, 0.045, 0.355, 1],
	easeInOutQuart: [0.77, 0, 0.175, 1],
	easeInOutQuint: [0.86, 0, 0.07, 1],
	easeInOutSine: [0.445, 0.05, 0.55, 0.95],
	easeInOutExpo: [1, 0, 0, 1],
	easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
	easeInOutBack: [0.68, -0.55, 0.265, 1.55],
} as const;

export const ease = {
	easeLinear: 'linear',
	ease: 'ease',
	easeIn: 'ease-in',
	easeOut: 'ease-out',
	easeInOut: 'ease-in-out',
	easeInQuad: `cubic-bezier(${easeTiming.easeInQuad.join()})`,
	easeOutQuad: `cubic-bezier(${easeTiming.easeOutQuad.join()})`,
	easeInCubic: `cubic-bezier(${easeTiming.easeInCubic.join()})`,
	easeOutCubic: `cubic-bezier(${easeTiming.easeOutCubic.join()})`,
	easeInQuart: `cubic-bezier(${easeTiming.easeInQuart.join()})`,
	easeOutQuart: `cubic-bezier(${easeTiming.easeOutQuart.join()})`,
	easeInQuint: `cubic-bezier(${easeTiming.easeInQuint.join()})`,
	easeOutQuint: `cubic-bezier(${easeTiming.easeOutQuint.join()})`,
	easeInSine: `cubic-bezier(${easeTiming.easeInSine.join()})`,
	easeOutSine: `cubic-bezier(${easeTiming.easeOutSine.join()})`,
	easeInExpo: `cubic-bezier(${easeTiming.easeInExpo.join()})`,
	easeOutExpo: `cubic-bezier(${easeTiming.easeOutExpo.join()})`,
	easeInCirc: `cubic-bezier(${easeTiming.easeInCirc.join()})`,
	easeOutCirc: `cubic-bezier(${easeTiming.easeOutCirc.join()})`,
	easeInBack: `cubic-bezier(${easeTiming.easeInBack.join()})`,
	easeOutBack: `cubic-bezier(${easeTiming.easeOutBack.join()})`,
	easeInOutQuad: `cubic-bezier(${easeTiming.easeInOutQuad.join()})`,
	easeInOutCubic: `cubic-bezier(${easeTiming.easeInOutCubic.join()})`,
	easeInOutQuart: `cubic-bezier(${easeTiming.easeInOutQuart.join()})`,
	easeInOutQuint: `cubic-bezier(${easeTiming.easeInOutQuint.join()})`,
	easeInOutSine: `cubic-bezier(${easeTiming.easeInOutSine.join()})`,
	easeInOutExpo: `cubic-bezier(${easeTiming.easeInOutExpo.join()})`,
	easeInOutCirc: `cubic-bezier(${easeTiming.easeInOutCirc.join()})`,
	easeInOutBack: `cubic-bezier(${easeTiming.easeInOutBack.join()})`,
} as const;
