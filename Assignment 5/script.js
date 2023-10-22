
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) {
                this.name = name;
            }
            if (description !== null) {
                this.description = description;
            }
            if (category !== null) {
                this.category = category;
            }
        }
    }

    toString() {
        return `<div id="content-item-${this.id}">
            <h4>${this.name}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>`;
    }
}

const contentItems = [
    new ContentItem(0, "Hiking Boots", "Durable hiking boots for outdoor adventures", "Outdoor Gear"),
    new ContentItem(1, "Cooking Utensils", "High-quality cooking utensils for the kitchen", "Kitchenware"),
    new ContentItem(2, "Fancy Dress", "Elegant evening dress for special occasions", "Fashion"),
    new ContentItem(3, "Smartphone", "Latest smartphone with advanced features", "Electronics"),
    new ContentItem(4, "Fitness Tracker", "Fitness tracker to monitor your workouts", "Fitness Gear"),
];

$(document).ready(function () {
    const $contentList = $("#content-item-list");
    
    contentItems.forEach((item) => {
        const $contentItem = $(item.toString());
        
        $contentItem.css({
            border: "2.7px solid #13a5b0",
            width: "370px",
            padding: "18px",
            margin: "12px auto",
        });
        
        $contentList.append($contentItem);
        const themeTitle = "Shop"; 
        $("#content h2").text(themeTitle);
    });
});