import { RoomResponse } from "../../../@types";
type Props = {
  key: number;
  roomDetail: RoomResponse;
};
export const ItemRoom = (props: Props) => {
  const { roomDetail } = props;
  return (
    <div className="basis-1/3 p-3">
      <a href="#">
        <img src={roomDetail?.hinhAnh} alt={roomDetail?.tenPhong} />
        <p>{roomDetail?.tenPhong}</p>
        <p>{roomDetail?.giaTien}</p>
      </a>
    </div>
  );
};
