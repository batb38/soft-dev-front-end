import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className="uk-container">
        <div className="column">
          <h1 className="title"  style={{margin: "25px 0" }}>BB Онлайн сургалт</h1>
          <h2 className="subtitle">Танилцуулга</h2>
          <p>
            {" "}
            Та юу ч зааж болно. Жишээ нь програмчлал, маркетинг, хувь хүний
            хөгжил, бизнесийн арга ухаан, стартапын нууц, элсэлтийн математик,
            ширээний теннис, англи хэлний орчуулга, хоол хийх тухай, фэйсбүүк
            ашиглах арга, уран зураг, шатар... Хамгийн гол нь та уг сэдвээ өөрөө
            сайн мэддэг байх ёстой бөгөөд хичээлийнхээ видео бичлэгийг өөрөө
            хийсэн байна гэсэн ганц л нөхцөлтэй.
          </p>
        </div>
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider="center: true"
        >
          <ul className="uk-slider-items uk-grid">
            <li className="uk-width-3-4">
              <a className="uk-panel">
                <img
                  src="https://images.pexels.com/photos/5054213/pexels-photo-5054213.jpeg?cs=srgb&dl=pexels-cottonbro-5054213.jpg&fm=jpg"
                  alt=""
                />
                <div className="uk-position-center uk-panel">
                  <h1>1</h1>
                </div>
              </a>
            </li>
            <li className="uk-width-3-4">
              <a className="uk-panel">
                <img
                  src="/home1.jpg"
                  alt=""
                />
                <div className="uk-position-center uk-panel">
                  <h1>2</h1>
                </div>
              </a>
            </li>
            <li className="uk-width-3-4">
              <a className="uk-panel">
                <img
                  src="/home2.jpg"
                  alt=""
                />
                <div className="uk-position-center uk-panel">
                  <h1>3</h1>
                </div>
              </a>
            </li>
            <li className="uk-width-3-4">
              <a className="uk-panel">
                <img
                  src="/home3.jpg"
                  alt=""
                />
                <div className="uk-position-center uk-panel">
                  <h1>4</h1>
                </div>
              </a>
            </li>
          </ul>
          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>
        <div className="column">
          <p className="mb-4">
            Бүх сургалт нь 3-30 минутын урттай видео хэлбэрээр хүргэгдэнэ. Мянга
            уншсанаас нэг үзсэн нь дээр. Таны цаг завыг супер хэмнэх болно
            гэдгийг амлая.
          </p>
        </div>
      </div>
    );
  }
}
