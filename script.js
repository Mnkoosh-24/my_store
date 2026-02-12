function buyViaWhatsApp(productName) {
    const phone = "+249126772389"; // ضع رقمك هنا مع رمز الدولة
    const message = `مرحباً، أود شراء منتج: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}head>: src="script.js"></script>