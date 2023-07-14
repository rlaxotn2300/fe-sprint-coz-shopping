import React from 'react';
import './Section.css';

const Section = ({ isData }) => {

    const filter_product =
        isData ? isData.filter(obj => {
            return obj.type === 'Product'
        }) : console.log('noData');

    const filter_bookMark =
        isData ? isData.filter(obj => {
            return obj.type === 'Category'
        }) : console.log('noData')

    return (
        <div className='section'>
            <div className='product_list'>
                <h2>상품 리스트</h2>
                <ul>
                    {filter_product ? filter_product.map((obj, idx) => {
                        if(idx < 4){return <li>
                            <img src={obj.image_url} />
                            <p className='h3'><strong>{obj.title}</strong></p>
                            <p>{`${obj.price}원`}</p>
                        </li>
                    }}) : console.log('null')}
                </ul>
            </div>
            <div className='bookmark_list'>
                <h2>북마크 리스트</h2>
                <ul>
                    {filter_product ? filter_bookMark.map((obj, idx) => {
                        if(idx < 4){return <li>
                            <img src={obj.image_url} />
                            <p className='h3'><strong>{obj.title}</strong></p>
                        </li>
                    }}) : console.log('null')}
                </ul>
            </div>
        </div>
    )
}

export default Section

{/* <img src={isData ? isData[0].image_url : ''} /> */ }
