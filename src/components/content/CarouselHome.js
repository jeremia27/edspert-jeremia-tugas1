import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome() {
    return (
        <>
            <Carousel style={{ textAlign: 'center' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-80"
                        src="https://w0.peakpx.com/wallpaper/165/747/HD-wallpaper-beautiful-landscape-digital-art.jpg"
                        alt="First slide"
                        style={{ height: "400px", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.bhmpics.com/downloads/landscape-wallpaper-4k/38.1144182.jpg"
                        alt="Second slide"
                        style={{ height: "400px", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://c4.wallpaperflare.com/wallpaper/375/206/386/landscape-firewatch-tower-colorful-wallpaper-preview.jpg"
                        alt="Third slide"
                        style={{ height: "400px", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
