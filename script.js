document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    document.getElementById('productForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const product = {
            image_url: document.getElementById('image_url').value,
            name: document.getElementById('name').value,
            status: document.getElementById('status').value,
            price: document.getElementById('price').value,
            stock: document.getElementById('stock').value,
            available_at: document.getElementById('available_at').value
        };

        await saveProduct(product);
        loadProducts();
        document.getElementById('productForm').reset();
    });
});

async function saveProduct(product) {
    try {
        const response = await fetch('save_product.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadProducts() {
    try {
        const response = await fetch('products.php');
        const products = await response.json();
        const tbody = document.querySelector('#productsTable tbody');
        tbody.innerHTML = '';

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${product.image_url}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${product.status}</td>
                <td>$${parseFloat(product.price).toFixed(2)}</td>
                <td>${product.stock}</td>
                <td>${new Date(product.available_at).toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}