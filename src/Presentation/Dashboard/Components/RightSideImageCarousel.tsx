import { Carousel } from "@arco-design/web-react";
import { memo, useMemo } from "react";

function RightSideImageCarousel() {
    const imageSrc = useMemo(
        () => [
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
            "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
        ],
        []
    );

    return (
        <Carousel
            indicatorType={"slider"}
            indicatorPosition={"bottom"}
            showArrow="never"
            className="w-full h-[400px] xl:h-[160px]"
            autoPlay
        >
            {imageSrc.map((src, index) => (
                <div key={index}>
                    <img src={src} className="w-full h-[400px] xl:h-[160px]" />
                </div>
            ))}
        </Carousel>
    );
}

export default memo(RightSideImageCarousel);
