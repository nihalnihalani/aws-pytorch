import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [{
                    title:'Chest Scan',
                    imageurl:'https://ctisus.com/resources/library/teaching-files/x-rays/371274.jpg',
                    id:1
                },
                {
                    title:'Breast Scan',
                    imageurl:'https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/breast-density-and-your-mammogram-report/_jcr_content/par/responsive_columns/column-0/textimage/image.img.jpg/1570716399141.jpg',
                    id:2
                },
                 {
                    title:'Brain Scan',
                    imageurl:'https://prod-images-static.radiopaedia.org/images/4170261/c5d7c3ed6c7fe53e59c2dd902e44b9_big_gallery.jpg',
                    id:3
                 }   
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,id,imageurl})=>(
                        <MenuItem key={id} title={title} imageurl={imageurl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;