import React from 'react';
import {useFetch} from "../hooks/useFetch";
import {Wrapper} from "./Wrapper";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const SectionImage = ({imageURI, ...props}) => {
    return (
        <Wrapper {...props}>
            <img style={{maxWidth: "100%"}} src={imageURI} alt={imageURI} />
        </Wrapper>
    );
};

const SectionArticle = ({title, text, imageURI, leftToRight = true, ...props}) => {
    return (
        <Wrapper {...props}>
            <Grid container direction={leftToRight ? 'row' : 'row-reverse'}>
                <Grid item xs={6}>
                    <img style={{maxWidth: 100}} src={imageURI} alt={imageURI} />
                </Grid>
                <Grid item xs={6}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

const SectionData = ({url, ...props}) => {
    const { response, error, isLoading, call } = useFetch(url);

    return (
        <Wrapper {...props}>
            {error && <div>Error happened :(</div>}
            { isLoading
                ? <div>Loading...</div>
                :  (
                    <>
                        <div style={{overflow: 'hidden'}}>{JSON.stringify(response).substr(0, 1000) + '...'}</div>
                        <Button onClick={() => call()}>Refresh</Button>
                    </>
                )
            }
        </Wrapper>
    );
};

export {SectionImage, SectionArticle, SectionData };
