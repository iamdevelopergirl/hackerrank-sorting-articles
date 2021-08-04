const Articles = ({articlesList}) => {

    const articlesData = articlesList.map((article, index) => {
        return(
            <tr key={article.title}>
                <td>{article.title}</td>
                <td>{article.upVotes}</td>
                <td>{article.date}</td>
            </tr>
        )
    });

    return (<table border="1" cellSpacing="2" cellPadding="20px" style={{
        "borderCollapse": "collapse"
        }}>
        <thead>
            <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {articlesData}
        </tbody>
    </table>
)};

export default Articles;