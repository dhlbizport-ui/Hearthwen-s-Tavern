================================================================================
                        HEARTHWEN'S TAVERN
                  E-COMMERCE WEBSITE - README
================================================================================

Project      : Hearthwen's Tavern – E-Commerce Website
Course       : CCS0027/L – Web Design and Client-Side Scripting
Type         : Front-End Prototype (No Backend Required)
Hosted On    : GitHub Pages
Last Updated : November 2026

================================================================================
1. PROJECT OVERVIEW
================================================================================

Hearthwen's Tavern is a responsive, front-end e-commerce website for a cozy
artisanal food, beverage, and workshop business. The site allows users to:

  - Browse products organized by category (Snacks, Drinks, Workshops)
  - Add items to a shopping cart
  - View cart contents and total price
  - Simulate a checkout process
  - Learn about the business on the About Us page

This is a FRONT-END PROTOTYPE. There is no database, backend server, user
authentication, or real payment processing. All cart and checkout actions are
simulated using JavaScript and sample data.

The project source files are hosted on GitHub, and the live website is
published through GitHub Pages.

================================================================================
2. LIVE WEBSITE & REPOSITORY LINKS
================================================================================

  Live Website (GitHub Pages):
    https://github.com/dhlbizport-ui/Hearthwen-s-Tavern

  GitHub Repository:
    https://github.com/YOUR-USERNAME/hearthwens-tavern

  IMPORTANT: Replace "YOUR-USERNAME" with your actual GitHub username in both
  links above before sharing or submitting this README.

================================================================================
3. FILE STRUCTURE
================================================================================

Final.Project/
│
├── index.html                  → Homepage (hero, categories, best sellers)
├── categories.html             → Product catalog (all products by category)
├── about.html                  → About Us page (story, vision, values)
├── README.txt                  → This file
│
├── css/
│   └── paganda.css             → Custom stylesheet (colors, typography, layout)
│
├── js/
│   └── main.js                 → JavaScript (cart logic, UI updates, feedback)
│
└── Assets/
    ├── Updated Logo May 22, 2024.png
    ├── cafe.interior.jpg
    ├── Monte Cristo Glam Shot Top View.jpg
    ├── House Dumplings.jpg
    ├── Shanghai v2.jpg
    ├── Royal.Float.jpg
    ├── Salted-Caramel-Latte.jpg
    ├── Passion.fruit.popping.boba.fruit.tea.jpeg
    ├── Crochet.workshop.jpg
    ├── Baking.workshop.jpg
    ├── Candle.making.workshop.jpg
    ├── snacks.jpg
    ├── drinks.jpg
    └── Workshop.jpg

IMPORTANT: The folder structure on GitHub MUST match the structure above.
The HTML files reference CSS, JavaScript, and images using relative paths
(e.g., "css/paganda.css", "js/main.js", "Assets/..."). If any folder is
missing or misnamed on GitHub, the site will break.

================================================================================
4. VIEWING THE WEBSITE
================================================================================

METHOD A: View the Live Website (Recommended)

  1. Open your browser.
  2. Go to:
       https://YOUR-USERNAME.github.io/hearthwens-tavern/
  3. The homepage will load. Use the navigation bar to explore all pages.

  This is the easiest way to view the finished website without downloading
  any files.

METHOD B: View or Download the Source from GitHub

  1. Open your browser.
  2. Go to:
       https://github.com/YOUR-USERNAME/hearthwens-tavern
  3. To view a file, click on its name (e.g., "index.html").
  4. To download the entire project:
       - Click the green "Code" button.
       - Select "Download ZIP".
       - Extract the ZIP file to your computer.
       - Open "index.html" in your browser to view the site locally.

METHOD C: Clone the Repository (For Developers)

  If you have Git installed, run this command in your terminal:

    git clone https://github.com/YOUR-USERNAME/hearthwens-tavern.git

  Then open the folder and double-click "index.html", or use a code editor
  like Visual Studio Code with the Live Server extension.

================================================================================
5. HOW TO RUN LOCALLY (After Downloading from GitHub)
================================================================================

METHOD A: Open Directly in Browser

  1. Extract the downloaded ZIP file (if you downloaded it).
  2. Open the "hearthwens-tavern" folder.
  3. Double-click "index.html".
  4. The website opens in your default browser.

METHOD B: Using Visual Studio Code + Live Server

  1. Open Visual Studio Code.
  2. Go to File → Open Folder → Select "hearthwens-tavern".
  3. Install the "Live Server" extension if not already installed:
       - Click the Extensions icon (left sidebar) or press Ctrl+Shift+X.
       - Search for "Live Server" (by Ritwick Dey).
       - Click Install.
  4. Right-click "index.html" in the Explorer panel.
  5. Select "Open with Live Server".
  6. Your browser opens at http://127.0.0.1:5500/index.html.
  7. The page auto-refreshes when you save changes.

NOTE: An internet connection is required to load Bootstrap 5.3.3 from the CDN.
If you are offline, Bootstrap styles will not load.

================================================================================
6. HOW TO TEST THE FEATURES
================================================================================

A. ADDING ITEMS TO THE CART

  1. Open index.html or categories.html (live or local).
  2. Click any "Add to Cart" button on a product card.
  3. The button text briefly changes to "Added! ✓" for 1 second.
  4. The cart badge (🛒 Cart) in the navbar increases.
  5. Click the cart button to open the cart modal.
  6. The modal shows each item's name, quantity, and subtotal.
  7. The total price is displayed at the bottom of the modal.

B. ADDING THE SAME ITEM MULTIPLE TIMES

  1. Click the same "Add to Cart" button twice.
  2. The item's quantity in the cart increases (e.g., x2).
  3. The total price updates accordingly.

C. SIMULATED CHECKOUT

  1. Open the cart modal.
  2. Click "Proceed to Checkout".
  3. An alert appears: "Checkout simulated successfully!"
  4. Click OK to dismiss the alert.

D. NAVIGATION

  1. Use the navbar links to move between:
       - Home (index.html)
       - Categories (categories.html)
       - About Us (about.html)
  2. The active page link is highlighted in green.
  3. On mobile, the navbar collapses into a hamburger menu (☰).

================================================================================
7. RESPONSIVE DESIGN – HOW TO TEST
================================================================================

Test the website at these screen widths:

  - Mobile  : 320px
  - Tablet  : 768px
  - Desktop : 1440px

Steps in Chrome:

  1. Open the website in Chrome.
  2. Press F12 (or right-click → Inspect) to open DevTools.
  3. Click the "Toggle device toolbar" icon (or press Ctrl+Shift+M).
  4. Select a device preset or enter a custom width.
  5. Check that:
       - Text remains readable
       - Images do not stretch or overflow
       - Product cards stack properly
       - Navbar collapses on mobile
       - Cart modal is usable

================================================================================
8. HOW THE FILES GET TO GITHUB
================================================================================

There are two common ways to get your files into the GitHub repository.

OPTION A: Upload Through the GitHub Website (No Git Required)

  1. Log in to GitHub at https://github.com.
  2. Open your repository: https://github.com/YOUR-USERNAME/hearthwens-tavern
  3. Click "Add file" → "Upload files".
  4. Drag and drop your project files and folders into the browser window.
     - You can drag the entire "Assets" and "css" and "js" folders.
     - Make sure the folder names stay exactly "css", "js", and "Assets".
  5. Scroll down, enter a commit message (e.g., "Upload project files"),
     and click "Commit changes".
  6. To update a single file later:
       - Click the file name.
       - Click the pencil (Edit) icon.
       - Make changes and click "Commit changes".

OPTION B: Use Git from the Command Line (For Developers)

  1. Install Git from https://git-scm.com if not already installed.
  2. Open a terminal in your project folder.
  3. Run these commands:

       git init
       git add .
       git commit -m "Initial commit – Hearthwen's Tavern"
       git branch -M main
       git remote add origin https://github.com/YOUR-USERNAME/hearthwens-tavern.git
       git push -u origin main

  4. To push future changes:

       git add .
       git commit -m "Describe your change"
       git push

================================================================================
9. HOW GITHUB PAGES IS SET UP
================================================================================

GitHub Pages serves the website directly from the repository. Here is how it
was configured:

  1. Files were uploaded to the "main" branch of the repository.
  2. In the repository, go to Settings → Pages.
  3. Under "Build and deployment":
       - Source: "Deploy from a branch"
       - Branch: "main"
       - Folder: "/ (root)"
  4. Click "Save".
  5. GitHub builds the site and publishes it at:
       https://YOUR-USERNAME.github.io/hearthwens-tavern/

IMPORTANT: index.html MUST be in the root of the repository. GitHub Pages
automatically uses it as the homepage.

After any change is committed to the "main" branch, GitHub Pages rebuilds
the site automatically (usually within 1–2 minutes).

================================================================================
10. TROUBLESHOOTING (LIVE WEBSITE)
================================================================================

PROBLEM: The live site shows a 404 error.
  SOLUTION:
    - Confirm the URL is exactly:
        https://YOUR-USERNAME.github.io/hearthwens-tavern/
    - Wait 1–2 minutes after enabling Pages.
    - Check Settings → Pages and confirm the branch is "main" and the folder
      is "/ (root)".

PROBLEM: The live site loads but images are broken.
  SOLUTION:
    - Check that the "Assets" folder was uploaded with the EXACT name and
      capitalization ("Assets", not "assets").
    - Check that every image filename matches exactly (case-sensitive).
    - Open DevTools (F12) → Console tab to see which files are missing.

PROBLEM: The live site loads but CSS styles are missing.
  SOLUTION:
    - Check that the "css" folder exists and contains "paganda.css".
    - Confirm the <link> tag in each HTML file reads:
        <link rel="stylesheet" href="css/paganda.css">
    - Confirm that the folder name is lowercase "css".

PROBLEM: The "Add to Cart" button does nothing on the live site.
  SOLUTION:
    - Open DevTools (F12) → Console tab. Look for JavaScript errors.
    - Confirm that the "js" folder exists and contains "main.js".
    - Confirm that the <script> tag in each HTML file reads:
        <script src="js/main.js" defer></script>
    - Confirm that the folder name is lowercase "js".

PROBLEM: I updated a file on GitHub but the live site still shows the old version.
  SOLUTION:
    - Wait 1–2 minutes for GitHub Pages to rebuild.
    - Hard-refresh the browser (Ctrl+F5 or Cmd+Shift+R) to clear cache.
    - Go to Settings → Pages and confirm the latest deployment time.

PROBLEM: The cart resets when I navigate between pages.
  SOLUTION:
    - This is EXPECTED in the current prototype. The cart is stored in
      JavaScript memory and resets on page load.
    - Persisting the cart would require localStorage (future enhancement).

================================================================================
11. CUSTOMIZATION GUIDE
================================================================================

A. CHANGING COLORS

  Open css/paganda.css and modify the hex codes:

    Dark Brown   : #2c1d11  → navbar, headings, buttons
    Cream        : #faedcd  → logo text, hero headings
    Forest Green : #538d56  → borders, hover accents
    Deep Green   : #396c4a  → nav link hover, button hover
    Warm Green   : #247655  → about box background
    Off-White    : #fdfbf7  → body background
    Muted Taupe  : #b8a79b  → alternate section background

B. ADDING NEW PRODUCTS

  1. Open categories.html.
  2. Find the relevant <section> (snacks, drinks, or workshops).
  3. Copy an existing product card block and edit it:

       <div class="col-md-4">
           <div class="product-card card h-100 shadow-sm">
               <img src="Assets/YOUR-IMAGE.jpg" alt="Product Name" class="product-img card-img-top">
               <div class="product-info card-body d-flex flex-column">
                   <h3>Product Name</h3>
                   <p class="flex-grow-1">Product description here.</p>
                   <span class="price fw-bold text-success mb-2">₱000</span>
                   <button class="btn btn-outline-dark btn-sm add-to-cart mt-auto"
                           data-name="Product Name" data-price="000">Add to Cart</button>
               </div>
           </div>
       </div>

  4. Replace the image, name, description, price, and data attributes.
  5. Upload the new image to the "Assets" folder on GitHub.
  6. Commit the change to categories.html.

C. ADDING A NEW CATEGORY

  1. Open categories.html.
  2. Copy an entire <section> block (e.g., "Snacks").
  3. Change the id (e.g., id="new-category") and the heading text.
  4. Replace the product cards with your new products.
  5. Optionally add a link to it from index.html or the navbar.

================================================================================
12. FEATURES SUMMARY
================================================================================

  ✔ Hosted on GitHub Pages (live public URL)
  ✔ Source code publicly viewable on GitHub
  ✔ Responsive design (mobile, tablet, desktop)
  ✔ Fixed navigation bar with cart badge
  ✔ Hero section with call-to-action
  ✔ Product catalog organized by category
  ✔ Product cards with images, descriptions, and prices
  ✔ Add to Cart with immediate visual feedback ("Added! ✓")
  ✔ Cart modal with item list, quantities, and total price
  ✔ Quantity tracking (same item added multiple times)
  ✔ Simulated checkout confirmation
  ✔ About Us page with brand story and values
  ✔ Footer with contact information
  ✔ Bootstrap 5 components (navbar, cards, modal, grid)
  ✔ Custom CSS branding (colors, typography, hover states)
  ✔ Accessible alt text on all images
  ✔ Keyboard-navigable links and buttons

================================================================================
13. KNOWN LIMITATIONS (Front-End Prototype)
================================================================================

  - Cart data is NOT saved between page reloads.
  - No user accounts or login system.
  - No real payment processing (checkout is simulated).
  - No database – products are hardcoded in HTML.
  - No search or filter functionality (future enhancement).
  - No contact form with validation (only email/phone in footer).

================================================================================
14. FUTURE ENHANCEMENTS
================================================================================

  - Persist cart using localStorage or sessionStorage.
  - Add a Contact Us page with JavaScript form validation.
  - Implement product search and category filtering.
  - Add a wishlist or favorites feature.
  - Add a customer reviews section.
  - Implement a multi-step checkout form with validation.
  - Optimize images (compression, lazy loading).
  - Add animations and micro-interactions.

================================================================================
15. CONTACT INFORMATION
================================================================================

  Business Name : Hearthwen's Tavern
  Email         : drl.direct.bizport@gmail.com
  Phone         : +1 (222) 482-2326
  Copyright     : © 2026 Hearthwen's Tavern. All Rights Reserved.

================================================================================
16. CREDITS
================================================================================

  - Bootstrap 5.3.3 (CDN)  : https://getbootstrap.com
  - MDN Web Docs           : https://developer.mozilla.org
  - GitHub Pages           : https://pages.github.com
  - Product images         : Provided in Assets/ for educational use
  - Course                 : CCS0027/L – Web Design and Client-Side Scripting
  - Institution            : FEU Institute of Technology

================================================================================
                              END OF README
================================================================================
