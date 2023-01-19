 // first pop_up  
modal_input = {
        my_h3:"Nicht Träumen: Wünsche wahr machen!", 
        my_img: "https://wunsch.dana.at/fileadmin/user_upload/images/2023/Popups/CTA_Popups_V1.png",
        my_p1: "Sie sind nur wenige Klicks davon enfernt, mit einzigartigen DANA Türen Ihr Wohnen zu verändern.", 
        my_p2: "Machen Sie jetzt Wünsche wahr!", 
        my_a_text: "Jetzt Gutschein sichern" ,
        my_a_link : "https://mustershop.at/product/album/"       
    };
    
    
    
    ell = document.createElement('div')
    ell.setAttribute("id","Modal_div");
    document.body.appendChild(ell);
    ell.innerHTML += '<div class="popup" onclick="this.style.display = ' + "'none'" + '">' +
    '<div class="contentBox" onclick="event.stopPropagation()">' +
            '<div class="close_pop" onclick="this.parentElement.parentElement.style.display = ' + "'none'" + '">x</div>' +
            '<div class="imgBx">' +
                '<img class="pop-link" src=' + modal_input.my_img + ' onclick="location.href=' + "'" + modal_input.my_a_link + "'" + ';' + 'alt=' + "''" + '">' +
            '</div>' +               
            '<div class="content">' +
                '<div>' +
                    '<h1>' + modal_input.my_h3 + '</h1>' +
                    '<p>' + modal_input.my_p1 + '</p>' +
                    '<p>' + modal_input.my_p2 + '</p>' +
                    '<a  class="btn btn--product pop-link" href=' + modal_input.my_a_link + '>' + modal_input.my_a_text + 
                    '</a>' +
                '</div>' +
            '</div>' +
    '</div>' +
'</div>';;
    
    
    style = document.createElement('style');
    
    
    
    style.textContent = ':root {--modal-duration: 2s;} .popup{position: fixed;z-index: 50;height: 100%; width: 100%;left: 0;top: 0;display: block; background-color: rgba(0, 0, 0, 0.5); }.contentBox{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 780px;height: 375px;background: #fff;display: flex;align-items: center;justify-content: space-between;box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);animation-name: modalopen;animation-duration: var(--modal-duration);}.contentBox .imgBx{position: relative;width:33%;height: Auto;display: flex;justify-content: center;align-items: center;padding-right: 0%;padding-left: 5%;padding-top: 3%;padding-bottom: 3%;}.contentBox .imgBx img{position: relative;max-width: 350px;z-index: 1;cursor: pointer;}.contentBox .content{position: relative;width: 90%;height: 95%;display: flex;padding-right: 5%;padding-left: 2%;align-items: center;}.contentBox .content h1{font-size: 1.6em;margin-bottom: 1.5rem;}.contentBox .content p{font-weight: 600;font-size: 1.2em;margin-bottom: 2rem;}.close_pop{float: right;font-size: 30px;color: #fff;position: absolute;top: -45px;right: -25px;width: 40px; height: 40px;cursor: pointer;z-index: 10;}.close:hover,.close:focus { color: #ff4d54;text-decoration: none;cursor: pointer;}@media (min-width: 767px){.contentBox {onclick: "event.stopPropagation()";}}@media (max-width: 767px){.contentBox{height: Auto;flex-direction: column;width: 80%;min-width: 300px;}.contentBox .content{text-align: center;padding: 10px;padding-top: 0;}.contentBox .imgBx {height: 80px;}.contentBox .imgBx img {padding-right: 5%;max-width: 250px;top: -65px;}.contentBox .content h1 {margin-top: 15px;}.contentBox .content p{margin-bottom: 0rem;}.btn--product { margin-top: 20px;margin-bottom: 20px;}} @keyframes modalopen {from {opacity: 0}to {opacity: 1;}'
    
    document.head.appendChild(style);
