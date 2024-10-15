export function BreweriesIndex() {
  return (
    <div>
      <h1>All Breweries Page</h1>
      {photos.map((breweries) => (
+         <div key={breweries.id}>
+           <h2>{breweries.name}</h2>
+           <img src={breweries.url} />
+           <p>Width: {breweries.width}</p>
+           <p>Height: {breweries.height}</p>
+         </div>
+       ))}
    </div>
  );
}