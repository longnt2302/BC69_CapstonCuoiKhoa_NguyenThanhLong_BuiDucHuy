import { useNavigate } from "react-router-dom";
import { useSearchViTri } from "../../../hooks/api";
type Props = {
  tenViTri?: string | undefined;
};
export const ListItem = (props: Props) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  const navigate = useNavigate();
  return (
    <div>
      <a
        href={`/${tenViTri}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/${tenViTri}`);
        }}>
        <div className="relative pt-[56.25%]">
          <img
            src={data?.data[0].hinhAnh}
            alt={tenViTri}
            className="absolute w-full h-full object-cover top-0 left-0"
          />
        </div>
        <p className="text-white text-[16px] md:text-[18px] font-medium pt-2">{tenViTri}</p>
        <p>{data?.data[0].quocGia}</p>
      </a>
    </div>
  );
};
