<script>
    import { Slider } from 'carbon-components-svelte'
    import "carbon-components-svelte/css/g90.css";
    import { hexToRGB, hexToHSL, hexToOKLAB, calculateContrastRatio } from '$lib'; // Import the color conversion functions

    let opacity = 0.5;
    let computedColor = '#000000'; // Initialize computedColor with a default color

    // Target color values (replace these with your actual target color values)
    let targetrgb = hexToRGB('#63666e')
    let targethsl = hexToHSL('#63666e')    
    let targetoklab = hexToOKLAB('#63666e')

    function updateComputedColor() {
        // Convert wrap background color to RGB
        let wrapColor = hexToRGB('#c8b496');
        // Convert left background color to RGB
        let leftColor = hexToRGB('#111A2A'); // Replace with the actual left background color
        // Calculate the blended color
        let blendedColor = {
            r: Math.round((1 - opacity) * wrapColor.r + opacity * leftColor.r),
            g: Math.round((1 - opacity) * wrapColor.g + opacity * leftColor.g),
            b: Math.round((1 - opacity) * wrapColor.b + opacity * leftColor.b)
        };
        // Convert the blended color back to hex
        computedColor = `#${blendedColor.r.toString(16).padStart(2, '0')}${blendedColor.g.toString(16).padStart(2, '0')}${blendedColor.b.toString(16).padStart(2, '0')}`;
    }

    // Call updateComputedColor whenever opacity changes
    $: {
        updateComputedColor();
    }

    $: pagehsl = hexToHSL(computedColor);
    $: pageoklab = hexToOKLAB(computedColor);
    $: pagergb = hexToRGB(computedColor);
    $: contrastRatio = calculateContrastRatio(hexToRGB(computedColor), hexToRGB('#CDB8D1'));
</script>

<div class="wrap">
    <div class="left" style="background-color: rgba(var(--midnight), {opacity});"></div>

    <div class="right">
        <div class="rgb">
            <p>page rgb: {[pagergb.r, pagergb.g, pagergb.b].join(', ')}</p>
            <p>target rgb: {[targetrgb.r, targetrgb.g, targetrgb.b].join(', ')}</p>
        </div>
        <div class="oklab">
            <p>page oklab: {[pageoklab.l, pageoklab.a, pageoklab.b].join(', ')}</p>
            <p>target oklab: {[targetoklab.l, targetoklab.a, targetoklab.b].join(', ')}</p>
        </div>
        <div class="hsl">
            <p>page hsl: {[pagehsl.h, pagehsl.s, pagehsl.l].join(', ')}</p>
            <p>target hsl: {[targethsl.h, targethsl.s, targethsl.l].join(', ')}</p>
        </div>
        <div class="contrast">
            <p style="color: {contrastRatio < 3 ? 'pink' : contrastRatio > 4.5 ? 'lightgreen' : 'yellow'}">contrast ratio: {contrastRatio}</p>
            </div>
    </div>
    <div class="slider-wrap">
    <h1>Overlay Opacity: {Math.round(Math.abs(opacity) * 100) / 100}</h1>
    <Slider hideTextInput  bind:value={opacity} min={0} max={1} step={0.01} on:change={updateComputedColor} />
    
</div>
</div>

<style>
    h1 {
        font-family: 'Monaspace Xenon';
        color: rgb(var(--lavender));
    }
    .slider-wrap {
        padding-inline: 33px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        /* background-color: #393939; */
    }
    :global(body) {
        --mid: #111A2A;
        --midnight: 17, 26, 42;
--lav: #CDB8D1;
  --lavender: 205, 184, 209;
        background-color: rgb(vaR(--midnight));

        
    }
    p {
        font-family: 'Monaspace Xenon';
        color: #ccc;
        text-align: right;
    }

    .wrap {
        position: relative;
        background: #c8b496;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 33px;
    }

    .left,
    .right {
        flex: 1;
        height: 50vh;
        padding: 50px;
    }

    .right {
        background-color: #63666e;
        flex-direction: column;
    }
</style>
