const SMTHEMESFUNCTIONS = {
    renderPortFolio(){
        let HTMPortoflio = SMTHEMESOBJECT.PortFolio.works.map(item=>{
            return `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-work text-center mt-30">
                    <div class="work-image">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}">
                    </div>
                    <div class="work-overlay">
                        <a class="thumb-platform" href="${item.url}" target="_blank" title="Loja Integrada">
                            <img src="https://integrando.se//Store/assets/images/svg-lojaintegrada.svg" alt="Loja Integrada">
                        </a>

                        <div class="work-content">
                            <h3 class="work-title">${item.name}</h3>
                            <ul>
                                <li><a class="image-popup" href="${item.url}" target="_blank">Ver mais <i class="lni ml-1 lni-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        $('#portfolio').html(HTMPortoflio);
    }
}








SMTHEMESFUNCTIONS.renderPortFolio();