import React, {useContext} from 'react';
import {store} from "../store/store";
import Paper from '@material-ui/core/Paper';
import {SectionArticle, SectionData, SectionImage} from "../components/Sections";





const ViewContainer = () => {
    const {state: {value}} = useContext(store);

    const renderItem = ({type, ...item}) => {
        switch(type) {
            case 'hero':
                return <SectionImage key={Math.random()} {...item} />;
            case 'image-text':
                return <SectionArticle key={Math.random()} {...item} />;
            case 'data':
                return <SectionData key={Math.random()} {...item} />;
            default:
                return <Paper>Section with wrong type :(</Paper>
        }
    };


    return (
        <div>
            { value.map(el => renderItem(el)) }
        </div>
    );
};


export {ViewContainer};
