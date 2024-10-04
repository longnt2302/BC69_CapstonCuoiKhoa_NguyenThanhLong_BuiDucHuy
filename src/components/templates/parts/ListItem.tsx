import { useSearchViTri } from "../../../hooks/api";
type Props = {
  tenViTri: string;
};
export const ListItem = (props: Props) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  console.log("data: ", data?.hinhAnh);
  return (
    <div className="basis-1/3 p-3">
      <a href="#">
        <img src={data?.hinhAnh} alt={tenViTri} />
        <p>{tenViTri}</p>
        <p>{data?.quocGia}</p>
      </a>
    </div>
  );
};
