interface CoverArtProps {
    cover: string;
  }

export default function CoverArt({ cover }: CoverArtProps) {
    console.log('Cover Art URL:', cover);
    return (
        <img src={cover} alt="Cover Art" className=""/>
    )
}