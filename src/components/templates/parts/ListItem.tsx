import { useSearchViTri } from "../../../hooks/api";
type Props<T> = {
  tenViTri: T;
};
export const ListItem = (props: Props<string | undefined>) => {
  const { tenViTri } = props;
  const { data } = useSearchViTri(tenViTri);
  return (
    <div className="mb-3">
      <a href="#">
        <div className="pt-[56.25%] relative w-full">
          <img
            src={data?.data[0].hinhAnh}
            alt={tenViTri}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <p className="md:text-[18px] text-[16px] font-medium text-white md:pt-3 md:pb-2 pt-2 pb-1">
          {tenViTri}
        </p>
        <p>{data?.data[0].quocGia}</p>
      </a>
    </div>
  );
};
