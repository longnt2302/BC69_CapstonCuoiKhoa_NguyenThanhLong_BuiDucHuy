import { useSearchViTri } from "../../../hooks/api";
type Props = {
  tenViTri: string;
};
export const ListItem = (props: Props) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  return (
    <div className="gallery-list__item">
      <a href="#">
        <img src={data?.hinhAnh} alt={tenViTri} />
        <p>{tenViTri}</p>
        <p>{data?.quocGia}</p>
      </a>
    </div>
  );
};
