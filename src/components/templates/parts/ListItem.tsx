import { useSearchViTri } from "../../../hooks/api";
type Props<T> = {
  tenViTri: T;
};
export const ListItem = (props: Props<string | undefined>) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  return (
    <div className="basis-1/3 p-3">
      <a href="#">
        <img src={data?.data[0].hinhAnh} alt={tenViTri} />
        <p>{tenViTri}</p>
        <p>{data?.quocGia}</p>
      </a>
    </div>
  );
};
