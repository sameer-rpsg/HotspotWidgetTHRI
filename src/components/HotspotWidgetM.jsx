// export default HotspotWidgetM;
import React, { useState, useEffect, useRef } from "react";
import styles from "@/components/HotspotWidgetM.module.css";

const hoverButtons = [1, 2, 3, 4, 5];

const services = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/683533c09e4768d39e22f5c4_Eyelash-extension-super-real-Lash-Natural-sub-brands-Everlash.avif",
    title: "01",
    brandName:"everlash",
    description:
      "Lashes that sit effortlessly, yet make all the difference. Design to flatter the natural shape of your eyes, each set is applied with precision—whether soft and subtle or full and bold. Light as air, lasting as long as you need.",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/683533f53fb873b0cc28d6e4_Brow-Bomber-Threading-sub-brands-Everbrow.avif",
    title: "02",
    brandName:"everbrow",
    description:
      "Brows, but better. Subtle lifts, soft arches, and defined lines—crafted to frame your face naturally. From threading and waxing to the signature brow bomber, each technique is tailored to create balance without looking overdone.",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/6835342015e08369e5cbc136_Nails-art-sub-brands-Evernails.avif",
    title: "03",
    brandName:"ever nails",
    description:
      "Nails that feel as good as they look. Clean finishes, soft edges, and lasting polish—whether you prefer a classic manicure or something more intricate. Each nail set is designed to keep your nails strong and healthy.",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/683534383fd5947ee8bc5003_Waxing-Body-Face-brow-sub-brands-Everwax.avif",
    title: "04",
    brandName:"ever wax",
    description:
      "Smooth skin without distress. Gently and effective. Our best treatment are designed to leave your skin soft. Particularly from brows to body, every section is quick, precise, and tailored to your comfort.",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/6835345cabdf9992a1a185ad_Semi-Permanent-Makeup-Lip-brow-eyeliner-sub-brands-Everspmu.avif",
    title: "05",
    brandName:"ever spmu",
    description:
      "Beauty that stays with you. Expertly applied semi-permanent makeup enhances your natural features with subtle definition. From microblading to soft lip tinting, every stroke is placed with care for a look that lasts.",
  },
];

const HotspotWidgetM = () => {
  const [activeService, setActiveService] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const hoverButtonsRef = useRef(null);
  const serviceItemsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
    isDesktop &&
    hoverButtonsRef.current &&
    serviceItemsRef.current &&
    !hoverButtonsRef.current.contains(event.target) &&
    !serviceItemsRef.current.contains(event.target)
  ) {
    setActiveService(null);
  }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isDesktop]);

  return (
    <section className={styles.section_layout}>
      <div className={styles.layout_background_image_wrapper}>
        <div
          className={`${styles.image_overlay_layer} ${styles.hide_tablet}`}
        />
        <img
          sizes="(max-width: 1440px) 100vw, 1440px"
          alt="All Services Treatment"
          src="https://cdn.prod.website-files.com/67f28d1d69b4c6d58d1cd1da/68039fa1a0e0fa652a7bf2e6_EVER%20MODEL.avif"
          loading="eager"
          className={styles.layout_background_image}
        />
        <div className={styles.div_block_6}>
          <div className={styles.z_index_1}>
            <div className={styles.marquee_horizontal}>
              <div
                className={`${styles.marquee_horizontal_css} ${styles.w_embed}`}
              />
              <div className={styles.track_horizontal}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={styles.marquee_text}>
                    BEAUTY IN EVER DETAILS
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Buttons */}
      <div ref={hoverButtonsRef}>
      {hoverButtons.map((num) => (
        <div
          key={num}
          data-w-id={`hotspot-button-${num}`}
          className={`${styles.hover_button_grid} ${styles["_" + num]}`}
          onClick={() => {
            if (isDesktop) setActiveService(num);
          }}
          style={{ cursor: isDesktop ? "pointer" : "default" }}
        >
          <div className={styles.pulse_container}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`${styles.pulse_ring} ${
                  i > 0 ? styles[`delay_${i}`] : ""
                }`}
              />
            ))}
            <div
              className={`${styles.pulse_center} ${
                activeService === num ? styles.activePulse : ""
              }`}
            >
              <div className={styles.hover_button_text}>
                <div
                  className={`${styles.text_color_white} ${
                    activeService === num ? styles.activeText : ""
                  }`}
                >
                  {num.toString().padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* Service Content */}
      <div className={styles.layout_layer1}>
        <div className={styles.padding_global}>
          <div className={styles.container_large}>
            <div
              className={`${styles.padding_bottom} ${styles.padding_medium}`}
            >
              <div className={styles.layout_component}>
                <div
                  className={`${styles.w_layout_grid} ${styles.layout_content}`}
                >
                  <div className={styles.layout_content_left} ref={serviceItemsRef}>
                    {services.map((service) => {
                      const isActive =
                        isDesktop && activeService === service.id;
                      return (
                        <div
                          key={service.id}
                          data-w-id={`service-${service.id}`}
                          className={`${styles.team15_item} ${
                            styles["_" + service.id]
                          } ${isActive ? styles.active : styles.inactive}`}
                        >
                          <img
                            loading="lazy"
                            src={service.image}
                            alt=""
                            className={styles.team15_image}
                          />
                          <div className={styles.team15_item_content}>
                            <div
                              className={`${styles.margin_bottom} ${styles.margin_xsmall}`}
                            >
                              <div className={styles.team15_title_wrapper}>
                                <div>
                                  <div className={styles.text_size_medium}>
                                    {service.title}
                                  </div>
                                </div>
                                <div
                                  className={`${styles.w_layout_vflex} ${styles.flex_block_8}`}
                                >
                                  <div
                                    className={`${styles.everlogo} ${styles.lash} ${styles.icon_height_xsmall} ${styles.w_embed}`}
                                  >
                                  {service.brandName}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className={styles.text_size_tiny}>
                              {service.description}
                            </p>
                            <button className={styles.MhotspotBtn}>Read more</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.layout_content_right}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotspotWidgetM;
