import { useContent } from "../../content/ContentContext";

export default function Portfolio(){
  const { content } = useContent();
  return (
    <div className="container" style={{padding:"24px 0"}}>
      <h1>Portfolio</h1>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
        {content.gallery.map((src,i)=>(
          <img key={i} src={src} alt={`g-${i}`} style={{width:"100%", height:200, objectFit:"cover", borderRadius:10}}/>
        ))}
      </div>
    </div>
  );
}
