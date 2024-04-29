// place files you want to import through the `$lib` alias in this folder.
interface RGBColor {
    r: number;
    g: number;
    b: number;
}
export function hexToOKLAB(hex: String) {
    let { r, g, b } = hexToRGB(hex);

    // Convert RGB to linear sRGB
    let rl = r / 255;
    let gl = g / 255;
    let bl = b / 255;

    // Convert linear sRGB to XYZ
    let x = 0.4122214708 * rl + 0.5363325363 * gl + 0.0514459929 * bl;
    let y = 0.2119034982 * rl + 0.6806995451 * gl + 0.1073969566 * bl;
    let z = 0.0883024619 * rl + 0.2817188376 * gl + 0.6299787005 * bl;

    // Normalize XYZ
    let xn = x / 0.9504559271;
    let yn = y / 1.0;
    let zn = z / 1.088916648;

    // Convert XYZ to CIE Lab
    let fx = xn > 0.008856 ? Math.cbrt(xn) : (7.787 * xn) + (16 / 116);
    let fy = yn > 0.008856 ? Math.cbrt(yn) : (7.787 * yn) + (16 / 116);
    let fz = zn > 0.008856 ? Math.cbrt(zn) : (7.787 * zn) + (16 / 116);

    let l = (116 * fy) - 16;
    let a = 500 * (fx - fy);
    let oklab_b = 200 * (fy - fz); // Corrected variable name to avoid shadowing 'b'

    return { l: Math.round(l * 100) / 100, a: Math.round(a * 100) / 100, b: Math.round(oklab_b * 100) / 100 };
}

export function hexToRGB(hex: String) {
    // Remove '#' if it's included
    hex = hex.replace('#', '');

    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
}

export function hexToHSL(hex: String) {
    let { r, g, b } = hexToRGB(hex);

    // Convert RGB to HSL
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function calculateContrastRatio(color1: RGBColor, color2: RGBColor): number {
    // Helper function to calculate the relative luminance of a color
    const getRelativeLuminance = (color: RGBColor) => {
        const sRGB = Object.values(color).map(value => {
            value /= 255;
            return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
    };

    // Calculate the relative luminance of both colors
    const luminance1 = getRelativeLuminance(color1);
    const luminance2 = getRelativeLuminance(color2);

    // Ensure luminance1 is the lighter color
    const [lighter, darker] = luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];

    // Calculate the contrast ratio
    const contrastRatio = (lighter + 0.05) / (darker + 0.05);

    return Number(contrastRatio.toFixed(2)); // Round to 2 decimal places and convert to number
}