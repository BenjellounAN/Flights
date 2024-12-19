<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flight Booking - Affiliate Site</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
        }

        /* Header */
        header {
            background: #0d6efd;
            color: white;
            padding: 40px 0;
            text-align: center;
            position: relative;
        }

        header h1 {
            font-size: 36px;
        }

        header p {
            font-size: 18px;
            margin-top: 10px;
        }

        /* Language Selector */
        .language-selector {
            position: absolute;
            top: 20px;
            right: 30px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 8px 12px;
        }

        .language-selector select {
            font-size: 16px;
            padding: 8px 15px;
            border-radius: 5px;
            border: 1px solid #ddd;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .language-selector select:hover {
            border-color: #0d6efd;
        }

        /* Search Section */
        .search-section {
            background: #fff;
            padding: 40px 20px;
        }

        .search-section .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .search-section h2 {
            font-size: 28px;
            margin-bottom: 30px;
        }

        .search-section .form-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }

        .search-section .form-group label {
            font-size: 16px;
            width: 100%;
            text-align: left;
            margin-bottom: 8px;
        }

        .search-section .form-group input,
        .search-section .form-group select {
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 240px;
            transition: all 0.3s ease-in-out;
        }

        .search-section .form-group input:focus,
        .search-section .form-group select:focus {
            border-color: #0d6efd;
            outline: none;
        }

        .search-section button {
            padding: 12px 25px;
            font-size: 16px;
            background-color: #0d6efd;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
            margin-top: 20px;
        }

        .search-section button:hover {
            background-color: #0b5ed7;
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .search-section button:active {
            background-color: #0a4fbf;
            transform: translateY(2px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Affiliate Offers Section */
        .affiliate-offers {
            background: #f8f9fa;
            padding: 40px 0;
        }

        .affiliate-offers .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .affiliate-offers h2 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 30px;
        }

        .offers {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .offer {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .offer:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .offer img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            transition: transform 0.3s ease-in-out;
        }

        .offer img:hover {
            transform: scale(1.05);
        }

        .offer h3 {
            font-size: 20px;
            margin-top: 15px;
            margin-bottom: 10px;
        }

        .offer p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .offer a {
            display: inline-block;
            padding: 12px 25px;
            background-color: #0d6efd;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
        }

        .offer a:hover {
            background-color: #0b5ed7;
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .offer a:active {
            background-color: #0a4fbf;
            transform: translateY(2px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Footer */
        footer {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Language Selector -->
    <div class="language-selector">
        <select id="language-select" onchange="changeLanguage()">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="ar">العربية</option>
        </select>
    </div>

    <!-- Header -->
    <header>
        <div class="container">
            <h1 id="site-title">Flight Booking Site</h1>
            <p id="site-description">Best offers for booking flights worldwide</p>
        </div>
    </header>

    <!-- Search Section -->
    <section class="search-section">
        <div class="container">
            <h2 id="search-title">Search for Your Flight</h2>
            <div class="form-group">
                <label for="from" id="from-label">From:</label>
                <input type="text" id="from" name="from" required placeholder="Where from?">

                <label for="to" id="to-label">To:</label>
                <input type="text" id="to" name="to" required placeholder="Where to?">

                <label for="departure-date" id="departure-label">Departure Date:</label>
                <input type="date" id="departure-date" name="departure-date" required>
            </div>
            <button type="submit">Search</button>
        </div>
    </section>

    <!-- Affiliate Offers Section -->
    <section class="affiliate-offers">
        <div class="container">
            <h2 id="offers-title">Best Offers</h2>
            <div class="offers">
                <div class="offer">
                    <img src="https://via.placeholder.com/300x200?text=Flight+Offer" alt="Flight Offer">
                    <h3 id="offer-title">Special Offer on Flights</h3>
                    <p id="offer-description">Book your flight now with the best prices!</p>
                    <a href="https://affiliate-link.com?ref=youraffiliateID" target="_blank">Book Now</a>
                </div>
                <!-- More offers can be added here -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Flight Booking. All rights reserved.</p>
    </footer>

    <script>
        function changeLanguage() {
            var lang = document.getElementById('language-select').value;
            // Logic to change content based on selected language
            // This would involve replacing the text content for the site with the relevant translations
            if (lang == 'fr') {
                document.getElementById('site-title').innerText = "Site de Réservation de Vol";
                document.getElementById('site-description').innerText = "Meilleures offres pour réserver des vols dans le monde entier";
                document.getElementById('search-title').innerText = "Recherchez votre vol";
                document.getElementById('from-label').innerText = "De:";
                document.getElementById('to-label').innerText = "À:";
                document.getElementById('departure-label').innerText = "Date de départ:";
                document.getElementById('offers-title').innerText = "Meilleures offres";
                document.getElementById('offer-title').innerText = "Offre spéciale sur les vols";
                document.getElementById('offer-description').innerText = "Réservez votre vol maintenant avec les meilleurs prix!";
            } else if (lang == 'es') {
                document.getElementById('site-title').innerText = "Sitio de Reservas de Vuelos";
                document.getElementById('site-description').innerText = "Mejores ofertas para reservar vuelos a nivel mundial";
                document.getElementById('search-title').innerText = "Busca tu vuelo";
                document.getElementById('from-label').innerText = "De:";
                document.getElementById('to-label').innerText = "A:";
                document.getElementById('departure-label').innerText = "Fecha de salida:";
                document.getElementById('offers-title').innerText = "Mejores ofertas";
                document.getElementById('offer-title').innerText = "Oferta especial en vuelos";
                document.getElementById('offer-description').innerText = "¡Reserva tu vuelo ahora con los mejores precios!";
            } else if (lang == 'ar') {
                document.getElementById('site-title').innerText = "موقع حجز الرحلات الجوية";
                document.getElementById('site-description').innerText = "أفضل العروض لحجز الرحلات الجوية حول العالم";
                document.getElementById('search-title').innerText = "ابحث عن رحلتك";
                document.getElementById('from-label').innerText = "من:";
                document.getElementById('to-label').innerText = "إلى:";
                document.getElementById('departure-label').innerText = "تاريخ المغادرة:";
                document.getElementById('offers-title').innerText = "أفضل العروض";
                document.getElementById('offer-title').innerText = "عرض خاص على الرحلات الجوية";
                document.getElementById('offer-description').innerText = "احجز رحلتك الآن بأفضل الأسعار!";
            }
        }
    </script>
</body>
</html>
