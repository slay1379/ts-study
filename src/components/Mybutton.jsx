export default function Mybutton({ clickUrl, background, title }) {
  return (
    <a
      href={clickUrl}
      style={{
        background: background,
        padding: "10px",
        borderRadius: "8px",
        color: "white",
        textDecoration: "none",
        display: "inline-block",
        marginTop: "10px",
      }}
    >
      {title}
    </a>
  );
}
