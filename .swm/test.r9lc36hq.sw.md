---
title: Test
---
&nbsp;&nbsp;&nbsp;Create a list of card view

<SwmSnippet path="/src/component/Card/Card.js" line="3">

---

<SwmMention uid="1LlO6r">[Scoutlier Test](mailto:scoutliertest@gmail.com)</SwmMention>

```javascript
const Card = ({ data }) => {
  // console.log(data, "CardData");
  return (
    <section className="destinations">
      <div className="grid">
        <div>
          <img src={data.snippet.thumbnails.high.url} alt="destination-1" />
          <h3>{`${data.snippet.title.slice(0,60)}...`}</h3>
          <p>{data.snippet.description.slice(0,136)}</p>
        </div>
      </div>
    </section>
  );
};
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBc2VhcmNoLWxpc3QtdmlkZW9zJTNBJTNBUmF2aWRldjAx" repo-name="search-list-videos"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
