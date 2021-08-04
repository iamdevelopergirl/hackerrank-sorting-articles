import Button from './Button/button.js';
import Articles from './Articles/article.js';
import './sortTable.scss';
import { useState, useEffect } from 'react';

const listA = [
    {title : "Js Closure", upVotes : 20, date : "2021-11-20"},
    {title : "Js Arrow function", upVotes : 2, date : "2021-10-20"},
    {title : "React redux", upVotes : 100, date : "2021-09-20"},
    {title : "React Router", upVotes : 21, date : "2021-08-20"},
    {title : "JS Obj literal", upVotes : 200, date : "2021-07-20"},
    {title : "HTML Animation", upVotes : 10, date : "2021-06-20"},
]

const SortTable = () => {

    const [articlesList, setArticleList] = useState(listA);
    const [buttonName, setButtonName] = useState("default");

    useEffect(() => {
        changeOrder();
        return () => {
            //cleanup
        }
    }, [buttonName])

    const sortFunC = (item1, item2) =>  item2 - item1;
    const dateSort = (item1, item2) => {
        const date1 = new Date(item1);
        const date2 = new Date(item2);
        return date2 - date1;
    }
    
    function changeOrder(){
        if(buttonName === "upvote"){
            const upVotesList = articlesList.map((item, index) => {
                return item.upVotes;
            });
            upVotesList.sort(sortFunC);
            let newArticleList = [];
            upVotesList.map((item) => {
                newArticleList.push(...articlesList.filter((article) => article.upVotes === item));
            });
            setArticleList(newArticleList);
        }
        else if(buttonName === "date"){
            const dateList = articlesList.map((item, index) => {
                return item.date;
            });
            dateList.sort(dateSort);
            console.log(dateList);
            let newArticleList = [];
            dateList.map((item) => {
                newArticleList.push(...articlesList.filter((article) => article.date === item));
            });
            setArticleList(newArticleList);
        }
        else{
            setArticleList(articlesList);
        }
        
    }
    

    return (
        <main>
            <section className="button-containers">
                <Button name="Most Upvoted" className="small teal" onClick={() => setButtonName("upvote")}></Button>
                <Button name="Recent Date" className="small teal" onClick={() => setButtonName("date")}></Button>
            </section>
            <section className="articles-container">
                <Articles articlesList = {articlesList}/>
            </section>
        </main>
    )
};

export default SortTable;