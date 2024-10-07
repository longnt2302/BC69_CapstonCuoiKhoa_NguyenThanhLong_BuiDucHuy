import { useNavigate } from "react-router-dom";
import { useSearchViTri } from "../../../hooks/api";
type Props = {
  key: number;
  tenViTri: string | undefined;
};
export const ListItem = (props: Props) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  const navigate = useNavigate();
  return (
    <div className="basis-1/3 p-3">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/${tenViTri}`);
        }}
      >
        <img src={data?.data[0].hinhAnh} alt={tenViTri} />
        <p>{tenViTri}</p>
        <p>{data?.quocGia}</p>
      </a>
    </div>
  );
};
