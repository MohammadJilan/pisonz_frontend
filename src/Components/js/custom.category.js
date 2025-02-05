class Category{

    static catList = Array(
        ["Direct-top up products", 50],
        ["Other Gift Cards", 51],
        ["Amazon Gift Cards", 1391],
        ["Apple Music", 1444],
        ["Garena Shells", 766],
        ["Google Play", 538],
        ["iTunes Gift Card", 2433],
        ["League of Legends", 1223],
        ["Netflix", 874],
        ["PSN", 765],
        ["Razer Gold", 451],
        ["Riot Access Code", 1261],
        ["Spotify", 992],
        ["Steam", 993],
        ["Apex Legends", 2377],
        ["XBox Gift Card", 3381],
        ["NetEase Pay", 3381],
        ["Astro Pay", 3351],
        ["Bilibili", 3075],
        ["iQIYI", 3382],
    );

    static getId(category){
        const categoryItem = this.catList.find(cat => cat[0] === category);
        return categoryItem ? categoryItem[1] : null;
    }
}

export default Category;