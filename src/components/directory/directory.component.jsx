import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menuitem/menuitem.component";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "JACKETS",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "jackets"
        },
        {
          title: "SNEAKERS",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "sneakers"
        },
        {
          title: "WOMEN",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size: "large",
          linkUrl: "women"
        },
        {
          title: "MEN",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size: "large",
          linkUrl: "men"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directorymenu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default DirectoryMenu;
