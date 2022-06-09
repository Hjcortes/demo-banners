import React from 'react';
import './styles.css';
import LazyLoad from 'react-lazyload';

function App() {
  return (
    <div className="App">
  <div className="text-center">
    <h1 className="h1">Visualizador de banners XC</h1>
    <p className="lead">Nombre de campaña</p> 
  </div>
    
  <div className="container">
    <div className="row">
        <ul>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/Coba.jpg" alt=""/>
                <p className="text-center fw-bold text-wine">300x250</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/tulum.jpg" alt=""/>
                <p className="text-center fw-bold">520x354-</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xcaretcopia1.jpg" alt=""/>
                <p className="text-center fw-bold">1314x295</p>
              </li>
            </LazyLoad>
            <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur mauris eu maximus suscipit. Suspendisse feugiat porttitor fermentum. Nulla efficitur tempus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vulputate sit amet enim quis iaculis. In vulputate ante eu metus vestibulum, non convallis nunc tristique. Maecenas vitae velit sed libero blandit porttitor eget id lorem. Morbi cursus sed risus in mollis. Nulla sapien ipsum, congue sit amet dictum eget, interdum sit amet tortor. Morbi accumsan libero sed justo luctus volutpat. Duis a semper mi. Quisque eu finibus justo, malesuada tincidunt libero. Vivamus hendrerit aliquam auctor.

            Fusce quis diam maximus, suscipit tellus ac, tempor felis. Fusce a lorem commodo, mollis neque sit amet, rutrum neque. Ut ullamcorper eleifend lacus, a vehicula neque fermentum id. Donec ullamcorper scelerisque laoreet. Quisque non congue dolor, in dictum ligula. Nullam vel ligula egestas, finibus purus vitae, porttitor neque. In magna felis, elementum sed nibh nec, gravida pulvinar mauris.
            
            Nunc sed augue luctus, luctus turpis imperdiet, bibendum massa. Nullam a scelerisque orci. Vivamus maximus massa at congue pulvinar. Nam fermentum diam diam, eu dapibus neque efficitur eget. Integer tempor metus quis velit bibendum commodo. Mauris velit nunc, vehicula sed rutrum ultrices, congue ac nibh. In elementum maximus augue nec luctus. Nam volutpat augue urna, sit amet consequat elit consectetur sit amet. Donec diam ante, fringilla eu consectetur in, pretium et dolor. Etiam laoreet condimentum nunc, sit amet tincidunt elit iaculis eu. Curabitur blandit maximus lectus ut placerat. Etiam imperdiet urna ut sodales posuere. Nulla maximus, lectus semper ultrices blandit, leo quam dignissim eros, tincidunt malesuada lacus ex nec ante.
            
            Phasellus sit amet enim nec lorem suscipit porttitor. Mauris aliquam ligula ut eros efficitur sagittis. Suspendisse tristique purus a sagittis commodo. Nulla at tempus ante. Vivamus rhoncus id erat ut pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempus, nisl id tincidunt placerat, est nisi porttitor metus, vitae mattis lectus neque et velit.
            
            Nullam diam lectus, dignissim vel bibendum in, condimentum ac felis. Nunc vitae dolor mi. Morbi dapibus tempor diam, ac efficitur lacus dapibus nec. Ut tellus quam, lobortis et risus sit amet, interdum imperdiet libero. In eget pellentesque neque, eu sagittis metus. Nam tristique, arcu eget interdum lobortis, massa leo semper ligula, ut molestie libero arcu at elit. Duis sollicitudin dictum nibh a tristique. Suspendisse finibus, felis ac iaculis ornare, lorem tellus fringilla ligula, a malesuada metus quam at lorem. Nam nec sodales nisi. Nam ultrices ligula congue, feugiat sem et, bibendum tortor.</p>
            </li>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xcaret-copia3.jpg" alt=""/>
                <p className="text-center fw-bold">970x90</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/XcaretExpeditions.jpg" alt=""/>
                <p className="text-center fw-bold">750x350</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/Xenses.jpg" alt=""/>
                <p className="text-center fw-bold">728x90</p>
              </li>
            </LazyLoad>
            <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur mauris eu maximus suscipit. Suspendisse feugiat porttitor fermentum. Nulla efficitur tempus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vulputate sit amet enim quis iaculis. In vulputate ante eu metus vestibulum, non convallis nunc tristique. Maecenas vitae velit sed libero blandit porttitor eget id lorem. Morbi cursus sed risus in mollis. Nulla sapien ipsum, congue sit amet dictum eget, interdum sit amet tortor. Morbi accumsan libero sed justo luctus volutpat. Duis a semper mi. Quisque eu finibus justo, malesuada tincidunt libero. Vivamus hendrerit aliquam auctor.

            Fusce quis diam maximus, suscipit tellus ac, tempor felis. Fusce a lorem commodo, mollis neque sit amet, rutrum neque. Ut ullamcorper eleifend lacus, a vehicula neque fermentum id. Donec ullamcorper scelerisque laoreet. Quisque non congue dolor, in dictum ligula. Nullam vel ligula egestas, finibus purus vitae, porttitor neque. In magna felis, elementum sed nibh nec, gravida pulvinar mauris.
            
            Nunc sed augue luctus, luctus turpis imperdiet, bibendum massa. Nullam a scelerisque orci. Vivamus maximus massa at congue pulvinar. Nam fermentum diam diam, eu dapibus neque efficitur eget. Integer tempor metus quis velit bibendum commodo. Mauris velit nunc, vehicula sed rutrum ultrices, congue ac nibh. In elementum maximus augue nec luctus. Nam volutpat augue urna, sit amet consequat elit consectetur sit amet. Donec diam ante, fringilla eu consectetur in, pretium et dolor. Etiam laoreet condimentum nunc, sit amet tincidunt elit iaculis eu. Curabitur blandit maximus lectus ut placerat. Etiam imperdiet urna ut sodales posuere. Nulla maximus, lectus semper ultrices blandit, leo quam dignissim eros, tincidunt malesuada lacus ex nec ante.
            
            Phasellus sit amet enim nec lorem suscipit porttitor. Mauris aliquam ligula ut eros efficitur sagittis. Suspendisse tristique purus a sagittis commodo. Nulla at tempus ante. Vivamus rhoncus id erat ut pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempus, nisl id tincidunt placerat, est nisi porttitor metus, vitae mattis lectus neque et velit.
            
            Nullam diam lectus, dignissim vel bibendum in, condimentum ac felis. Nunc vitae dolor mi. Morbi dapibus tempor diam, ac efficitur lacus dapibus nec. Ut tellus quam, lobortis et risus sit amet, interdum imperdiet libero. In eget pellentesque neque, eu sagittis metus. Nam tristique, arcu eget interdum lobortis, massa leo semper ligula, ut molestie libero arcu at elit. Duis sollicitudin dictum nibh a tristique. Suspendisse finibus, felis ac iaculis ornare, lorem tellus fringilla ligula, a malesuada metus quam at lorem. Nam nec sodales nisi. Nam ultrices ligula congue, feugiat sem et, bibendum tortor.</p>
            </li>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xhh800x800-logo.jpg" alt=""/>
                <p className="text-center fw-bold">800x800</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xichen.jpg" alt=""/>
                <p className="text-center fw-bold">300x600</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/Xoximilco.jpg" alt=""/>
                <p className="text-center fw-bold">160x600</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xplor.jpg" alt=""/>
                <p className="text-center fw-bold">120x600</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
              <li>
                <img className="lazy lazyColor" src="imgs/xplor-320x50-en.gif" alt=""/>
                <p className="text-center fw-bold">320x50</p>
              </li>
            </LazyLoad>
            <LazyLoad height={200}>
            <li></li>
            </LazyLoad>
        </ul>
        <div className="container-md text-center m-5">
          <button type="button" className="display-6 fw-bold btn btn-success">Descargar</button>
        </div>
        
    </div>
  </div>
    </div>
  );
}

export default App;
