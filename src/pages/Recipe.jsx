import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("summary");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULARAPIKEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <DetailWrapper>
        <div>
            <h1>{details.title}</h1>
            <img src={details.image} alt="" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Info>
            <butt>
                <Button className={activeTab === "summary" ? "active" : ""} onClick={() => setActiveTab("summary")}>Description</Button>
                <Button className={activeTab === "steps" ? "active" : ""} onClick={() => setActiveTab("steps")}>Steps</Button>
                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
            </butt>
            <br></br>
            {activeTab === "summary" && (
                <div>
                    <h2 dangerouslySetInnerHTML={{__html: details.summary}}></h2>
                </div>
            )}

            {activeTab === "steps" && (
                <div>
                    <h2 dangerouslySetInnerHTML={{__html: details.instructions}}></h2>
                </div>
            )}

            {activeTab === "ingredients" && (
                <ul>
                {details.extendedIngredients.map((ingredient) =>
                    <li key={ingredient.id}>{ingredient.original}</li>
                )}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: block;
    
    .active {
        background: black;
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
        font-size: 1.3rem;
        color: black;
        cursor: default;
        transition: 0.5s;
    }
    h2:hover{
        background-color: white;
        border-radius: 1rem;
    }
    li {
        font-size: 1.4rem;
        line-height: 2.5rem;
        text-align: center;
        list-style-position: inside;
        color: black;
        transition: 0.5s;
        cursor: default;
        font-weight: bold;
    }
    li:hover{
        background-color: white;
        border-radius: 1.5rem;
    }

    ul {
        margin-top: 2rem;
    }
    img {
        cursor: default;
        border-radius: 2rem;
        border: solid;
        border-width: 8px;
        border-color: black;
        transition: 0.5s;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    img:hover{
        transform: scale(1.2);
    }
    butt {
        margin: 0;
        position: absolute;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        transition: 0.5s;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: solid;
    border-color: black;
    margin-right: 16rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 2rem;
    font-size: 1rem;
`

const Info = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`

export default Recipe