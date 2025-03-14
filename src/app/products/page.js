'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 模擬從數據庫獲取產品數據
const getProducts = () => {
  // 這裡應該是從API或數據庫獲取數據
  // 目前使用靜態數據模擬
  return [
    {
      id: 1,
      name: "Ulanzi RT02 讀稿機",
      price: "NT$ 3,980",
      category: "直播設備",
      category_id: 1,
      description: "專業直播讀稿機，適合網紅主播使用，支援多種設備連接。",
      specifications: ["尺寸: 標準", "顏色: 黑色", "材質: 鋁合金+塑膠", "連接方式: USB"],
      image: "/images/product_1.jpg"
    },
    {
      id: 2,
      name: "Zhiyu Smooth Q4 手機穩定器",
      price: "NT$ 2,980",
      category: "穩定器",
      category_id: 2,
      description: "專業手機穩定器，三軸防抖，適合Vlog拍攝，支援多種手機尺寸。",
      specifications: ["尺寸: 折疊式", "顏色: 灰色", "電池續航: 15小時", "負重: 280g"],
      image: "/images/product_2.jpg"
    },
    {
      id: 3,
      name: "DJI Osmo Mobile 6 手機穩定器",
      price: "NT$ 4,290",
      category: "穩定器",
      category_id: 2,
      description: "DJI最新款手機穩定器，磁吸式手機夾，支援ActiveTrack 5.0主動跟蹤。",
      specifications: ["尺寸: 折疊式", "顏色: 深灰色", "電池續航: 6.5小時", "負重: 290g"],
      image: "/images/product_3.jpg"
    },
    {
      id: 4,
      name: "MARS 300 PRO 無線圖傳系統",
      price: "NT$ 8,500",
      category: "無線圖傳",
      category_id: 7,
      description: "專業無線圖傳系統，支援HDMI輸入輸出，低延遲，傳輸距離可達300米。",
      specifications: ["接口: HDMI", "延遲: <0.1s", "傳輸距離: 300m", "解析度: 1080p60fps"],
      image: "/images/product_4.jpg"
    },
    {
      id: 5,
      name: "Panasonic S5M2 全片幅相機",
      price: "NT$ 52,900",
      category: "相機",
      category_id: 5,
      description: "Panasonic全片幅無反相機，2420萬像素，支援6K錄影，內建五軸防抖。",
      specifications: ["感光元件: 全片幅CMOS", "像素: 2420萬", "錄影: 6K 30p", "防抖: 5軸機身防抖"],
      image: "/images/product_5.jpg"
    },
    {
      id: 6,
      name: "RODE Wireless Go II 無線麥克風",
      price: "NT$ 8,990",
      category: "收音設備",
      category_id: 3,
      description: "RODE雙通道無線麥克風系統，內建錄音功能，最遠傳輸距離200米。",
      specifications: ["通道: 雙通道", "內建錄音: 24小時", "傳輸距離: 200m", "電池續航: 7小時"],
      image: "/images/product_6.jpg"
    },
    {
      id: 7,
      name: "MTT601A II-AL 二代油壓阻尼雲台錄影三腳架",
      price: "NT$ 4,500",
      category: "三腳架",
      category_id: 6,
      description: "專業油壓阻尼雲台錄影三腳架，鋁合金材質，穩定性佳，適合專業攝影師使用。",
      specifications: ["材質: 鋁合金", "最大高度: 170cm", "最大負重: 5kg", "腳管節數: 3節"],
      image: "/images/product_7.jpg"
    },
    {
      id: 8,
      name: "Ninja 20 單色溫補光燈",
      price: "NT$ 2,200",
      category: "攝影燈具",
      category_id: 4,
      description: "200W大功率單色溫LED補光燈，色溫5600K，適合室內外拍攝使用。",
      specifications: ["功率: 200W", "色溫: 5600K", "亮度調節: 10-100%", "供電: AC/DC雙用"],
      image: "/images/product_8.jpg"
    },
    {
      id: 9,
      name: "WE-10S 全彩RGB環形燈",
      price: "NT$ 3,600",
      category: "攝影燈具",
      category_id: 4,
      description: "18吋全彩RGB環形燈，支援多種顏色調節，適合直播、自拍、彩色攝影使用。",
      specifications: ["尺寸: 18吋", "功率: 30W", "色溫: 3200K-5600K", "RGB: 支援全彩"],
      image: "/images/product_9.jpg"
    },
    {
      id: 10,
      name: "GoPro HERO 12 Black",
      price: "NT$ 13,500",
      category: "運動相機",
      category_id: 8,
      description: "GoPro最新款運動相機，支援5.3K錄影，HyperSmooth 6.0防抖，防水10米。",
      specifications: ["錄影: 5.3K60fps", "防抖: HyperSmooth 6.0", "防水: 10米", "電池續航: 2小時"],
      image: "/images/product_10.jpg"
    },
    // 新增從Yahoo拍賣發現的SmallRig產品
    {
      id: 11,
      name: "SmallRig斯莫格 3320 4K (C 轉 A) HDMI線",
      price: "NT$ 320",
      category: "無線圖傳",
      category_id: 7,
      description: "SmallRig專業HDMI線，C型轉A型接口，支援4K影像傳輸，適用於相機連接監視器或圖傳設備。",
      specifications: ["接口: C型轉A型", "長度: 標準", "支援解析度: 4K", "材質: 優質線材"],
      image: "/images/product_11.jpg"
    },
    {
      id: 12,
      name: "SmallRig斯莫格 1409 4cm通用型滑槽",
      price: "NT$ 340",
      category: "攝影配件",
      category_id: 6,
      description: "SmallRig通用型滑槽，長度4cm，可用於連接各種攝影配件，安裝簡便。",
      specifications: ["長度: 4cm", "材質: 鋁合金", "安裝: 標準1/4螺絲", "顏色: 黑色"],
      image: "/images/product_12.jpg"
    },
    {
      id: 13,
      name: "SmallRig斯莫格 2060 固定冷靴座",
      price: "NT$ 380",
      category: "攝影配件",
      category_id: 6,
      description: "SmallRig固定冷靴座，2入裝，可用於安裝麥克風、補光燈等配件，堅固耐用。",
      specifications: ["數量: 2入", "材質: 鋁合金", "安裝: 標準1/4螺絲", "顏色: 黑色"],
      image: "/images/product_13.jpg"
    },
    {
      id: 14,
      name: "SmallRig斯莫格 2661 遮光斗轉接環",
      price: "NT$ 400",
      category: "攝影配件",
      category_id: 6,
      description: "SmallRig遮光斗轉接環，適用於各種鏡頭，有效阻擋雜光，提升拍攝質量。",
      specifications: ["直徑: 標準", "材質: 鋁合金", "適用: 多種鏡頭", "顏色: 黑色"],
      image: "/images/product_14.jpg"
    }
  ];
};

// 獲取所有分類
const getCategories = () => {
  return [
    { id: 1, name: "直播設備", description: "各種直播用攝影機、讀稿機、導播設備等" },
    { id: 2, name: "穩定器", description: "手機、相機穩定器，適合拍攝Vlog和專業影片" },
    { id: 3, name: "收音設備", description: "麥克風、收音器、監聽耳機等專業音頻設備" },
    { id: 4, name: "攝影燈具", description: "LED補光燈、RGB彩色燈、環形燈等各種攝影燈具" },
    { id: 5, name: "相機", description: "各品牌專業相機，包括Panasonic、Sony等" },
    { id: 6, name: "三腳架", description: "專業攝影三腳架、錄影三腳架、雲台等" },
    { id: 7, name: "無線圖傳", description: "專業無線圖傳系統，支援HDMI、SDI等接口" },
    { id: 8, name: "運動相機", description: "GoPro等運動相機及配件" }
  ];
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    // 獲取產品和分類數據
    const allProducts = getProducts();
    const allCategories = getCategories();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    // 過濾產品
    let result = products;
    
    // 按分類過濾
    if (selectedCategory) {
      result = result.filter(product => product.category_id === selectedCategory);
    }
    
    // 按價格範圍過濾
    if (priceRange.min !== '') {
      const minPrice = parseInt(priceRange.min);
      result = result.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        return price >= minPrice;
      });
    }
    
    if (priceRange.max !== '') {
      const maxPrice = parseInt(priceRange.max);
      result = result.filter(product => {
        const price = parseInt(product.price.replace(/[^\d]/g, ''));
        return price <= maxPrice;
      });
    }
    
    // 按搜尋詞過濾
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // 排序
    switch (sortOption) {
      case 'price-asc':
        result = [...result].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
          const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // 默認排序，不做任何操作
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, searchTerm, sortOption]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handlePriceRangeChange = (e, type) => {
    setPriceRange({
      ...priceRange,
      [type]: e.target.value
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange({ min: '', max: '' });
    setSearchTerm('');
    setSortOption('default');
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <h1 className="page-title text-center">所有商品</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            瀏覽我們豐富的攝影器材商品，從專業相機、穩定器到收音設備，滿足您所有的攝影需求。
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="card-luxury p-6 sticky top-24">
                <h3 className="text-xl font-serif text-primary mb-6">商品篩選</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-white mb-2">搜尋</label>
                  <input 
                    type="text" 
                    className="input-luxury w-full" 
                    placeholder="輸入關鍵字..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-white mb-3">商品分類</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`category-${category.id}`} 
                          className="mr-2 accent-primary"
                          checked={selectedCategory === category.id}
                          onChange={() => handleCategoryChange(category.id)}
                        />
                        <label 
                          htmlFor={`category-${category.id}`} 
                          className="text-gray-300 hover:text-primary cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-white mb-3">價格範圍</h4>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      className="input-luxury w-full" 
                      placeholder="最低"
                      value={priceRange.min}
                      onChange={(e) => handlePriceRangeChange(e, 'min')}
                    />
                    <span className="text-white">-</span>
                    <input 
                      type="number" 
                      className="input-luxury w-full" 
                      placeholder="最高"
                      value={priceRange.max}
                      onChange={(e) => handlePriceRangeChange(e, 'max')}
                    />
                  </div>
                </div>
                
                {/* Sort */}
                <div className="mb-6">
                  <h4 className="text-white mb-3">排序方式</h4>
                  <select 
                    className="input-luxury w-full"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">預設排序</option>
                    <option value="price-asc">價格：低到高</option>
                    <option value="price-desc">價格：高到低</option>
                    <option value="name-asc">名稱：A到Z</option>
                    <option value="name-desc">名稱：Z到A</option>
                  </select>
                </div>
                
                {/* Clear Filters */}
                <button 
                  className="btn-luxury w-full"
                  onClick={clearFilters}
                >
                  清除所有篩選
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Results Summary */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-white">
                  顯示 <span className="text-primary">{filteredProducts.length}</span> 個商品
                </p>
              </div>
              
              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          width={600}
                          height={600}
                          className="product-card-image transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="product-card-body">
                        <h3 className="product-card-title">{product.name}</h3>
                        <p className="product-card-price">{product.price}</p>
                        <p className="product-card-category">{product.category}</p>
                        <p className="product-card-description">{product.description}</p>
                        <Link href={`/products/${product.id}`} className="btn-luxury w-full text-center">
                          查看詳情
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-300 mb-4">沒有找到符合條件的商品</p>
                  <button 
                    className="btn-luxury"
                    onClick={clearFilters}
                  >
                    清除所有篩選
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
      
      <Footer />
    </main>
  );
}
