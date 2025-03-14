'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

// 模擬從數據庫獲取產品數據
const getProductById = (id) => {
  // 這裡應該是從API或數據庫獲取數據
  // 目前使用靜態數據模擬
  const products = [
    {
      id: 1,
      name: "Ulanzi RT02 讀稿機",
      price: "NT$ 3,980",
      originalPrice: "NT$ 4,500",
      discount: "12% OFF",
      category: "直播設備",
      category_id: 1,
      description: "專業直播讀稿機，適合網紅主播使用，支援多種設備連接。Ulanzi RT02是一款專為直播、錄影和演講設計的專業讀稿機，採用高清顯示屏，支援多種設備連接，可調節速度和字體大小，讓您的直播更加專業流暢。",
      specifications: [
        "尺寸: 標準",
        "顏色: 黑色",
        "材質: 鋁合金+塑膠",
        "連接方式: USB",
        "螢幕尺寸: 12吋",
        "解析度: 1080p",
        "電池續航: 4小時",
        "支援格式: TXT, DOC, PDF"
      ],
      features: [
        "高清顯示屏，清晰易讀",
        "可調節速度和字體大小",
        "支援多種文件格式",
        "遙控器控制，操作便捷",
        "USB供電，使用方便",
        "輕巧便攜，易於安裝"
      ],
      images: [
        "/images/product_1.jpg",
        "/images/product_1_2.jpg",
        "/images/product_1_3.jpg"
      ],
      stock: 15,
      reviews: [
        {
          id: 1,
          user: "陳先生",
          rating: 5,
          date: "2025-02-15",
          comment: "非常好用的讀稿機，畫面清晰，操作簡單，直播效果提升很多！"
        },
        {
          id: 2,
          user: "林小姐",
          rating: 4,
          date: "2025-02-10",
          comment: "整體來說很滿意，唯一的缺點是電池續航時間稍短，但可以外接電源解決。"
        },
        {
          id: 3,
          user: "王先生",
          rating: 5,
          date: "2025-01-28",
          comment: "專業的讀稿機，讓我的直播更加流暢，客戶反饋也很好，值得推薦！"
        }
      ],
      relatedProducts: [2, 6, 14]
    },
    {
      id: 2,
      name: "Zhiyu Smooth Q4 手機穩定器",
      price: "NT$ 2,980",
      originalPrice: "NT$ 3,500",
      discount: "15% OFF",
      category: "穩定器",
      category_id: 2,
      description: "專業手機穩定器，三軸防抖，適合Vlog拍攝，支援多種手機尺寸。Zhiyu Smooth Q4是一款專為手機拍攝設計的三軸穩定器，採用最新的防抖算法，可實現平滑穩定的拍攝效果，支援多種手機尺寸，適合Vlog、短視頻和專業影片拍攝。",
      specifications: [
        "尺寸: 折疊式",
        "顏色: 灰色",
        "電池續航: 15小時",
        "負重: 280g",
        "重量: 370g",
        "連接方式: 藍牙",
        "充電時間: 2小時",
        "防抖軸: 三軸"
      ],
      features: [
        "三軸防抖，拍攝穩定流暢",
        "折疊設計，便於攜帶",
        "支援多種拍攝模式",
        "APP連接，功能豐富",
        "長效電池，續航15小時",
        "智能跟蹤，自動對焦"
      ],
      images: [
        "/images/product_2.jpg",
        "/images/product_2_2.jpg",
        "/images/product_2_3.jpg"
      ],
      stock: 25,
      reviews: [
        {
          id: 1,
          user: "張先生",
          rating: 5,
          date: "2025-03-01",
          comment: "非常好用的穩定器，防抖效果很好，拍攝的視頻非常穩定，推薦購買！"
        },
        {
          id: 2,
          user: "李小姐",
          rating: 4,
          date: "2025-02-20",
          comment: "整體來說很滿意，APP功能豐富，唯一的缺點是重量稍重，長時間拿著會有點累。"
        }
      ],
      relatedProducts: [3, 7, 13]
    },
    // 其他產品數據...
    {
      id: 3,
      name: "DJI Osmo Mobile 6 手機穩定器",
      price: "NT$ 4,290",
      originalPrice: "NT$ 4,990",
      discount: "14% OFF",
      category: "穩定器",
      category_id: 2,
      description: "DJI最新款手機穩定器，磁吸式手機夾，支援ActiveTrack 5.0主動跟蹤。DJI Osmo Mobile 6是DJI最新推出的手機穩定器，採用磁吸式手機夾設計，支援ActiveTrack 5.0主動跟蹤技術，可實現智能跟蹤拍攝，適合Vlog、短視頻和專業影片拍攝。",
      specifications: [
        "尺寸: 折疊式",
        "顏色: 深灰色",
        "電池續航: 6.5小時",
        "負重: 290g",
        "重量: 309g",
        "連接方式: 藍牙",
        "充電時間: 1.5小時",
        "防抖軸: 三軸"
      ],
      features: [
        "磁吸式手機夾，安裝便捷",
        "ActiveTrack 5.0主動跟蹤",
        "支援多種拍攝模式",
        "DJI Mimo APP連接",
        "內建延伸桿，自拍更方便",
        "智能手勢控制，操作簡便"
      ],
      images: [
        "/images/product_3.jpg",
        "/images/product_3_2.jpg",
        "/images/product_3_3.jpg"
      ],
      stock: 18,
      reviews: [
        {
          id: 1,
          user: "黃先生",
          rating: 5,
          date: "2025-03-05",
          comment: "DJI的產品一如既往的優秀，穩定效果很好，ActiveTrack功能非常實用！"
        },
        {
          id: 2,
          user: "吳小姐",
          rating: 5,
          date: "2025-02-25",
          comment: "磁吸式手機夾設計很方便，拍攝效果穩定，APP功能豐富，值得推薦！"
        }
      ],
      relatedProducts: [2, 7, 13]
    },
    // 更多產品...
  ];
  
  return products.find(product => product.id === parseInt(id)) || null;
};

// 獲取相關產品
const getRelatedProducts = (relatedIds) => {
  const products = [
    {
      id: 1,
      name: "Ulanzi RT02 讀稿機",
      price: "NT$ 3,980",
      category: "直播設備",
      image: "/images/product_1.jpg"
    },
    {
      id: 2,
      name: "Zhiyu Smooth Q4 手機穩定器",
      price: "NT$ 2,980",
      category: "穩定器",
      image: "/images/product_2.jpg"
    },
    {
      id: 3,
      name: "DJI Osmo Mobile 6 手機穩定器",
      price: "NT$ 4,290",
      category: "穩定器",
      image: "/images/product_3.jpg"
    },
    {
      id: 6,
      name: "RODE Wireless Go II 無線麥克風",
      price: "NT$ 8,990",
      category: "收音設備",
      image: "/images/product_6.jpg"
    },
    {
      id: 7,
      name: "MTT601A II-AL 二代油壓阻尼雲台錄影三腳架",
      price: "NT$ 4,500",
      category: "三腳架",
      image: "/images/product_7.jpg"
    },
    {
      id: 13,
      name: "SmallRig斯莫格 2060 固定冷靴座",
      price: "NT$ 380",
      category: "攝影配件",
      image: "/images/product_13.jpg"
    },
    {
      id: 14,
      name: "SmallRig斯莫格 2661 遮光斗轉接環",
      price: "NT$ 400",
      category: "攝影配件",
      image: "/images/product_14.jpg"
    }
  ];
  
  return products.filter(product => relatedIds.includes(product.id));
};

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  
  useEffect(() => {
    // 獲取產品數據
    const fetchedProduct = getProductById(parseInt(id));
    setProduct(fetchedProduct);
    
    if (fetchedProduct && fetchedProduct.relatedProducts) {
      const related = getRelatedProducts(fetchedProduct.relatedProducts);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 1)) {
      setQuantity(value);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < (product?.stock || 1)) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    // 這裡應該是添加到購物車的邏輯
    alert(`已將 ${quantity} 件 ${product.name} 加入購物車`);
  };
  
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value
    });
  };
  
  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating
    });
  };
  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    // 這裡應該是提交評論的邏輯
    alert('感謝您的評論！');
    setNewReview({
      name: '',
      rating: 5,
      comment: ''
    });
  };
  
  if (loading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-white mb-6">商品不存在</h1>
            <p className="text-gray-300 mb-8">抱歉，您查詢的商品不存在或已被移除。</p>
            <Link href="/products" className="btn-luxury">
              返回商品列表
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">首頁</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary transition-colors">所有商品</Link>
            <span className="mx-2">/</span>
            <Link href={`/categories/${product.category_id}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.name}</span>
          </div>
        </div>
      </section>
      
      {/* Product Detail */}
      <section className="py-12 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative h-[500px] overflow-hidden rounded-lg mb-4">
                <Image 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  fill 
                  style={{objectFit: 'cover'}}
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 overflow-hidden rounded-lg cursor-pointer border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image 
                      src={image} 
                      alt={`${product.name} - 圖片 ${index + 1}`} 
                      fill 
                      style={{objectFit: 'cover'}}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${star <= (product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length) ? 'text-primary' : 'text-gray-500'}`} 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-300">
                  {product.reviews.length} 則評論
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary mr-3">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through mr-3">{product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="bg-accent text-white px-2 py-1 text-sm font-bold rounded">{product.discount}</span>
                  )}
                </div>
                <p className="text-gray-300 mt-2">
                  庫存: <span className={product.stock > 10 ? 'text-green-500' : product.stock > 0 ? 'text-yellow-500' : 'text-red-500'}>
                    {product.stock > 0 ? `${product.stock} 件` : '缺貨中'}
                  </span>
                </p>
              </div>
              
              <p className="text-gray-300 mb-8">{product.description}</p>
              
              {product.stock > 0 && (
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-white mr-4">數量:</span>
                    <div className="flex items-center">
                      <button 
                        className="bg-dark-light text-white w-10 h-10 flex items-center justify-center rounded-l-md hover:bg-primary hover:text-dark transition-colors"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="w-16 h-10 bg-dark-light text-white text-center border-x border-gray-700"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        max={product.stock}
                      />
                      <button 
                        className="bg-dark-light text-white w-10 h-10 flex items-center justify-center rounded-r-md hover:bg-primary hover:text-dark transition-colors"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    className="btn-luxury w-full py-4 text-lg"
                    onClick={handleAddToCart}
                  >
                    加入購物車
                  </button>
                </div>
              )}
              
              <div className="divider-luxury my-8"></div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-300">現金自取</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-300">正品保證</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-gray-300">專業選購建議</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-gray-300">專業售後服務</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-white mr-4">分享:</span>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Tabs */}
      <section className="py-12 bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="flex border-b border-gray-700 mb-8">
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'description' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-primary'}`}
              onClick={() => setActiveTab('description')}
            >
              商品描述
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'specifications' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-primary'}`}
              onClick={() => setActiveTab('specifications')}
            >
              規格參數
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-gray-300 hover:text-primary'}`}
              onClick={() => setActiveTab('reviews')}
            >
              商品評論 ({product.reviews.length})
            </button>
          </div>
          
          <div className="card-luxury p-8">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <h3 className="text-2xl font-serif text-primary mb-6">商品描述</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <h4 className="text-xl text-white mb-4">產品特點</h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-serif text-primary mb-6">規格參數</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-serif text-primary mb-6">商品評論</h3>
                
                {/* Reviews List */}
                {product.reviews.length > 0 ? (
                  <div className="space-y-6 mb-8">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-700 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="mr-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-dark font-bold">
                              {review.user.charAt(0)}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{review.user}</h4>
                            <p className="text-gray-400 text-sm">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                              key={star} 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-5 w-5 ${star <= review.rating ? 'text-primary' : 'text-gray-500'}`} 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300 mb-8">目前還沒有評論，成為第一個評論的人吧！</p>
                )}
                
                {/* Add Review Form */}
                <div>
                  <h4 className="text-xl text-white mb-4">撰寫評論</h4>
                  <form onSubmit={handleSubmitReview}>
                    <div className="mb-4">
                      <label className="block text-white mb-2">您的名稱</label>
                      <input 
                        type="text" 
                        className="input-luxury w-full" 
                        name="name"
                        value={newReview.name}
                        onChange={handleReviewChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-white mb-2">評分</label>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-8 w-8 cursor-pointer ${star <= newReview.rating ? 'text-primary' : 'text-gray-500'}`} 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                            onClick={() => handleRatingChange(star)}
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-white mb-2">評論內容</label>
                      <textarea 
                        className="input-luxury w-full h-32" 
                        name="comment"
                        value={newReview.comment}
                        onChange={handleReviewChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-luxury">
                      提交評論
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="page-title text-center mb-12">相關商品</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="product-card">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      width={600}
                      height={600}
                      className="product-card-image transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-title">{relatedProduct.name}</h3>
                    <p className="product-card-price">{relatedProduct.price}</p>
                    <p className="product-card-category">{relatedProduct.category}</p>
                    <Link href={`/products/${relatedProduct.id}`} className="btn-luxury w-full text-center">
                      查看詳情
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
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
