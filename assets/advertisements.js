const topAdTemplate = document.createElement('template');
topAdTemplate.innerHTML = `
    <div class="mx-auto w-full max-w-[320px] h-[50px] sm:max-w-[468px] sm:h-[60px] md:max-w-[728px] md:h-[90px]">
        <div class="advertising-area">
            <div> <p class="sm:hidden">320x50 horizontal Ad</p> </div>
            <div> <p class="hidden sm:block md:hidden">468x60 horizontal Ad</p> </div>
            <div> <div class="hidden md:block"><script type="text/javascript">
	atOptions = {
		'key' : '624a97a6290d488d2c37917256d06a67',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/624a97a6290d488d2c37917256d06a67/invoke.js"></script></div> </div>
        </div>
    </div>
`;
const middleAdTemplate=document.createElement("template");middleAdTemplate.innerHTML=`
<div class="my-12 sm:my-16">
    <div class="mx-auto w-full max-w-[320px] h-[50px] sm:max-w-[468px] sm:h-[60px]">
        <div class="advertising-area">
            <div> <p class="sm:hidden">320x50 horizontal Ad</p> </div>
            <div> <p class="hidden sm:block">468x60 horizontal Ad</p> </div>
        </div>
    </div>
</div>
`;
const verticalAdTemplate=document.createElement("template");verticalAdTemplate.innerHTML=
'<div class="advertising-area h-[600px]"><p>160x600 Vertical Ad</p></div>';
const nativeBannerAdTemplate=document.createElement("template");nativeBannerAdTemplate.innerHTML=`
<div>
<script async="async" data-cfasync="false" src="//pl27312178.profitableratecpm.com/849e6610f4501e065f7c0550fff4cc17/invoke.js"></script>
<div id="container-849e6610f4501e065f7c0550fff4cc17"></div>
</div>
`;
class TopAd extends HTMLElement{constructor(){super();this.appendChild(topAdTemplate.content.cloneNode(!0))}}customElements.define("top-ad",TopAd);class MiddleAd extends HTMLElement{constructor(){super();this.appendChild(middleAdTemplate.content.cloneNode(!0))}}customElements.define("middle-ad",MiddleAd);class VerticalAd extends HTMLElement{constructor(){super();this.appendChild(verticalAdTemplate.content.cloneNode(!0))}}customElements.define("vertical-ad",VerticalAd);class NativeBannerAd extends HTMLElement{constructor(){super();this.appendChild(nativeBannerAdTemplate.content.cloneNode(!0))}}customElements.define("native-banner-ad",NativeBannerAd);
