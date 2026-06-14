const ORDER_API_URL = 'https://example.com/api';
const STATUS_DELIVERED = 'Delivered';

function createAuthHeader(token) {
    return {
        Authorization: `Bearer ${token}`
    };
}

async function fetchOrderDetails(orderId, token) {
    try {
        const response = await fetch(`${ORDER_API_URL}/order/${orderId}`, {
            headers: createAuthHeader(token)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch order details');
        }

        const order = await response.json();
        showOrderModal(order, token);

    } catch (error) {
        console.error('Error:', error);
    }
}

function showOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsSection = modal.querySelector('#orderDetails');

    detailsSection.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;

    modal.style.display = 'block';

    initializeCloseButton(modal);
    initializeConfirmButton(modal, order, token);
}

function initializeCloseButton(modal) {
    const closeButton = modal.querySelector('.close');

    closeButton.onclick = () => {
        modal.style.display = 'none';
    };
}

function initializeConfirmButton(modal, order, token) {
    const confirmButton = modal.querySelector('#confirmOrderBtn');

    if (order.status === STATUS_DELIVERED) {
        confirmButton.style.display = 'none';
        return;
    }

    confirmButton.style.display = 'block';

    confirmButton.onclick = () => {
        confirmOrder(order.id, token);
    };
}