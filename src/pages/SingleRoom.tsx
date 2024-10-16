import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/ui";
import { useQuery } from "@tanstack/react-query";
import { roomServices } from "../services";
import { Comments } from "../components/templates/singleRoom";
import { Controller, useForm } from "react-hook-form";
import { bookingSchema, bookingSchemaType } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBooking } from "../hooks/api/useBooking";
import { Bounce, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button, DatePicker, Input } from "antd";
import moment from "moment";
import { dataUser } from "../utils";
export const SingleRoom = () => {
  const { cityName, roomId } = useParams();
  const { data } = useQuery({
    queryKey: ["getRoomDetail", roomId],
    queryFn: async () => {
      const data = await roomServices.getRoomById(roomId);
      return data;
      // return roomServices.getRoomById(roomId);
    },
    enabled: !!roomId,
  });
  console.log("🚀 ~ SingleRoom ~ data:", data);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<bookingSchemaType>({
    mode: "onChange",
    resolver: zodResolver(bookingSchema),
  });

  const currentUser = dataUser();

  useEffect(() => {
    if (data) {
      setValue("maPhong", data?.data?.content?.id);
    }
    if (currentUser) {
      setValue("maNguoiDung", currentUser.user.id);
    }
  }, [data, currentUser, setValue]);

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useBooking();

  const onSubmit = (data: bookingSchemaType) => {
    mutate(data);
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Đặt phòng thành công !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        reset();
      }, 1500);
      setIsLoading(true);
      reset();
    }, 100);
  };

  return (
    <>
      <Breadcrumb currentPage={`${cityName} / ${roomId}`} />

      <div className="gray-bg small-padding fl-wrap">
        <div className="container">
          <div className="row flex flex-wrap justify-between md:items-stretch">
            <div className="col-md-9">
              <div className="list-single-main-wrapper fl-wrap">
                <div className="scroll-nav-wrap">
                  <nav className="scroll-nav scroll-init fixed-column_menu-init">
                    <ul className="no-list-style">
                      <li>
                        <a className="act-scrlink" href="#sec1">
                          <i className="fal fa-info"></i>
                        </a>
                        <span>Details</span>
                      </li>
                      <li>
                        <a href="#sec2">
                          <i className="fal fa-stars"></i>
                        </a>
                        <span>Features</span>
                      </li>
                      <li>
                        <a href="#sec3">
                          <i className="fal fa-bed"></i>
                        </a>
                        <span>Rooms</span>
                      </li>
                      <li>
                        <a href="#sec4">
                          <i className="fal fa-video"></i>
                        </a>
                        <span>Video</span>
                      </li>
                      <li>
                        <a href="#sec5">
                          <i className="fal fa-map-pin"></i>
                        </a>
                        <span>Location</span>
                      </li>
                      <li>
                        <a href="#sec6">
                          <i className="fal fa-comment-alt-lines"></i>
                        </a>
                        <span>Reviews</span>
                      </li>
                    </ul>
                    <div className="progress-indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-1 -1 34 34">
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          className="progress-bar__background"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r="15.9155"
                          className="progress-bar__progress 
                                                            js-progress-bar"
                        />
                      </svg>
                    </div>
                  </nav>
                </div>

                <div className="list-single-header-item  fl-wrap" id="sec1">
                  <div className="row">
                    <div className="col-md-12">
                      <h1>
                        {data?.data?.content?.tenPhong}
                        <span
                          className="verified-badge tolt"
                          data-microtip-position="bottom"
                          data-tooltip="Verified">
                          <i className="fas fa-check"></i>
                        </span>
                      </h1>
                      <div className="geodir-category-location fl-wrap">
                        <a href="#">
                          <i className="fas fa-map-marker-alt"></i> {cityName}
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis"
                          data-starrating2="4">
                          <span className="re_stars-title">Good</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-single-header-footer fl-wrap">
                    <div
                      className="list-single-header-price"
                      data-propertyprise="50500">
                      <strong>Price:</strong>
                      <span>$</span>
                      {data?.data?.content?.giaTien}
                    </div>
                    <div className="list-single-stats">
                      <ul className="no-list-style">
                        <li>
                          <span className="viewed-counter">
                            <i className="fas fa-eye"></i> Viewed - 156{" "}
                          </span>
                        </li>
                        <li>
                          <span className="bookmark-counter">
                            <i className="fas fa-heart"></i> Bookmark - 24{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list-single-main-media fl-wrap">
                  <div className="slick-slide-item">
                    <div className="box-item">
                      <a
                        href={data?.data?.content?.hinhAnh}
                        className="gal-link popup-image">
                        <i className="fal fa-search"></i>
                      </a>
                      <img src={data?.data?.content?.hinhAnh} alt="..." />
                    </div>
                  </div>
                </div>
                <div className="list-single-facts fl-wrap">
                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <i className="fal fa-home-lg"></i>
                      <h6>Loại</h6>
                      <span>Căn hộ / Nhà</span>
                    </div>
                  </div>

                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <i className="fal fa-users"></i>
                      <h6>Chỗ ở</h6>
                      <span>{data?.data?.content?.khach} Khách</span>
                    </div>
                  </div>

                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <i className="fal fa-bed"></i>
                      <h6>Phòng ngủ</h6>
                      <span>{data?.data?.content?.phongNgu} Phòng</span>
                    </div>
                  </div>

                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <i className="fal fa-bath"></i>
                      <h6>Phòng tắm</h6>
                      <span>{data?.data?.content?.phongTam} Phòng</span>
                    </div>
                  </div>
                </div>
                <div className="list-single-main-container fl-wrap">
                  <div className="list-single-main-item fl-wrap">
                    <div className="list-single-main-item-title">
                      <h3>Mô tả</h3>
                    </div>
                    <div className="list-single-main-item_content fl-wrap">
                      <p>{data?.data?.content?.moTa}</p>

                      <a href="#" className="btn float-btn color-bg">
                        Visit Website
                      </a>
                    </div>
                  </div>

                  <div className="list-single-main-item fl-wrap" id="sec2">
                    <div className="list-single-main-item-title">
                      <h3>Chi tiết</h3>
                    </div>
                    <div className="list-single-main-item_content fl-wrap">
                      <div className="details-list">
                        <ul>
                          <li>
                            <span>Số phòng ngủ:</span>
                            {data?.data?.content?.phongNgu} Phòng
                          </li>
                          <li>
                            <span>Số phòng tắm:</span>
                            {data?.data?.content?.phongTam} Phòng
                          </li>
                          <li>
                            <span>Số khách ở:</span>
                            {data?.data?.content?.khach} Khách
                          </li>
                          <li>
                            <span>Số giường:</span>
                            {data?.data?.content?.giuong} Giường
                          </li>
                          <li>
                            <span>Giá tiền thuê:</span>$
                            {data?.data?.content?.giaTien}/ngày
                          </li>
                          <li>
                            <span>Máy giặt:</span>
                            {data?.data?.content?.mayGiat && "có"}
                          </li>
                          <li>
                            <span>Bàn là:</span>
                            {data?.data?.content?.banLa && "có"}
                          </li>
                          <li>
                            <span>Bàn ủi:</span>
                            {data?.data?.content?.banUi && "có"}
                          </li>
                          <li>
                            <span>Tivi:</span>
                            {data?.data?.content?.tivi && "có"}
                          </li>
                          <li>
                            <span>Máy lạnh:</span>
                            {data?.data?.content?.dieuHoa && "có"}
                          </li>
                          <li>
                            <span>Wifi:</span>
                            {data?.data?.content?.wifi && "có"}
                          </li>
                          <li>
                            <span>Bếp:</span>
                            {data?.data?.content?.bep && "có"}
                          </li>
                          <li>
                            <span>Đỗ xe:</span>
                            {data?.data?.content?.doXe && "có"}
                          </li>
                          <li>
                            <span>Hồ bơi:</span>
                            {data?.data?.content?.hoBoi && "có"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Comments maPhong={data?.data?.content?.id} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bg-[#1B182B] min-h-full">
                <div className="px-6 py-9 md:sticky top-0">
                  <h3 className="text-white md:text-[22px] text-[20px] font-bold text-left mb-5">
                    Đặt phòng
                  </h3>
                  <form
                    name="bookingform"
                    className="main-register-form"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="text-white text-left mb-2">
                        <label className="font-semibold">Mã phòng </label>
                        <Controller
                          control={control}
                          name="maPhong"
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              // value={data?.data.content.id}
                            />
                          )}
                        />
                        {errors.maPhong && (
                          <p className="text-red-500">
                            {errors.maPhong.message}
                          </p>
                        )}
                      </div>
                      <div className="text-white text-left mb-2">
                        <label className="font-semibold">Ngày đến * </label>
                        <Controller
                          control={control}
                          name="ngayDen"
                          render={({ field }) => (
                            <DatePicker
                              className="w-full noBG"
                              {...field}
                              // format="DD/MM/YYYY"
                              value={
                                field.value
                                  ? moment(field.value, "DD/MM/YYYY")
                                  : null
                              }
                              onChange={(date) =>
                                field.onChange(
                                  date ? date.format("DD/MM/YYYY") : null
                                )
                              }
                            />
                          )}
                        />
                        {errors.ngayDen && (
                          <p className="text-red-500">
                            {errors.ngayDen.message}
                          </p>
                        )}
                      </div>
                      <div className="text-white text-left mb-2">
                        <label className="font-semibold">Ngày đi * </label>
                        <Controller
                          control={control}
                          name="ngayDi"
                          render={({ field }) => (
                            <DatePicker
                              className="w-full noBG"
                              {...field}
                              // format="DD/MM/YYYY"
                              value={
                                field.value
                                // ? moment(field.value, "DD/MM/YYYY")
                                // : null
                              }
                              onChange={(date) =>
                                field.onChange(
                                  date /*? date.format("DD/MM/YYYY") : null*/
                                )
                              }
                            />
                          )}
                        />
                        {errors.ngayDi && (
                          <p className="text-red-500">
                            {errors.ngayDi.message}
                          </p>
                        )}
                      </div>
                      <div className="text-white text-left mb-2">
                        <label className="font-semibold">Số khách </label>
                        <Controller
                          control={control}
                          name="soLuongKhach"
                          render={({ field }) => (
                            <Input {...field} type="number" />
                          )}
                        />
                        {errors.soLuongKhach && (
                          <p className="text-red-500">
                            {errors.soLuongKhach.message}
                          </p>
                        )}
                      </div>
                      <div className="text-white text-left mb-2">
                        <label className="font-semibold">Mã người dùng </label>
                        <Controller
                          control={control}
                          name="maNguoiDung"
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              // value={currentUser.user.id}
                            />
                          )}
                        />
                        {errors.maNguoiDung && (
                          <p className="text-red-500">
                            {errors.maNguoiDung.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="text-left mt-5">
                      <Button
                        loading={isLoading}
                        htmlType="submit"
                        className="log_btn bg-blue-500 text-white">
                        {" "}
                        Đặt phòng{" "}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
