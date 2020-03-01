const SMTHEMESFUNCTIONS = {
    accordionCustom(){
        $(document).on('click', '.accordion_item .accordion_target', function(){
            $(this).toggleClass('accordion_active');
            $(this).parents('.accordion_item').find('.accordion_content').slideToggle(500);
        });
    },

    // Renderiza Portfolio
    renderPortFolio(){
        let HTMPortoflio = SMTHEMESOBJECT.PortFolio.map(item=>{
            return `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-work text-center mb-25">
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

        $('#content_portfolio').html(HTMPortoflio);
    },

    // Renderiza Dúvidas Frequentes
    renderDoubt(){
        let HTMDoubt = SMTHEMESOBJECT.Doubt.map((item,index)=>{
            return `
            <div class="col-lg-12 px-0 py-0 item-doubt mb-3">
                <div class="accordion_item doubt-item--single-doubt">
                    <div class="accordion_target px-4 py-4 single-doubt--header ${index == 0 ? 'accordion_active' : ''}">
                        <h4 class="header--title-doubt">${item.title} <i class="lni float-right position-relative lni-chevron-down"></i></h4>
                    </div>
                    <div class="accordion_content mx-4 single-doubt--body" style="display:${index == 0 ? 'block' : 'none'};">
                        <div class="body--text-doubt pt-3 pb-4">
                            ${item.content}
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        $('#content_doubt').html(HTMDoubt);
    }

}








SMTHEMESFUNCTIONS.renderPortFolio();
SMTHEMESFUNCTIONS.renderDoubt();

SMTHEMESFUNCTIONS.accordionCustom();