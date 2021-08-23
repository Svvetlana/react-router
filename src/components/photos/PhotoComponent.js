import React from 'react';
import './photos.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';

const PhotoComponent = () => {
    return (
        <div className='container'>
            <div className='photo'>
                <div className='title'>
                    А есть такой закон: "Движение вперед!"
                </div>
                <div className='photo_inner'>
                    <img class="photo_inner_item" src={img1} alt="" />
                    <img class="photo_inner_item" src={img2} alt="" />
                    <img class="photo_inner_item" src={img3} alt="" />
                    <img class="photo_inner_item" src={img4} alt="" />
                    <img class="photo_inner_item" src={img5} alt="" />
                    <img class="photo_inner_item" src={img6} alt="" />
                    <img class="photo_inner_item" src={img7} alt="" />
                    <img class="photo_inner_item" src={img8} alt="" />
                </div>
                <div className='text'>
                    Кавказ 1991 год. Фото из личного архива.
                </div>
            </div>
        </div>
    )
}

export default PhotoComponent;