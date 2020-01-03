const { Router } = require('express');
const router = Router();

router.get('/', (require, response) => {
    response.json({ title: 'Test de test xD' });
})

module.exports = router;