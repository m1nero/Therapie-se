const Material = require('../models/Material');
const Profissional = require('../models/Profissional');

module.exports = {
    //Texto
    async textoAdd(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);
        return res.render('material/material_form', {
            page: {
                name: "Adicionar",
                type:  "texto"
            },
            material
        });
    },

    async textoStore(req, res) {
        let { txt_motivacional } = req.body;

        const material = await Material.create({ 
            url_imagem: null,
            video_id: null,
            txt_motivacional: txt_motivacional,
            profissional_id: req.session.profissionalId
        });

        return res.redirect('/texto/edit');
    },

    async textoEdit(req, res) {
        const { materialId } = req.params;

        const material = await Material.findAll({ 
            where: {
                profissional_id: req.session.profissionalId,
                id: materialId
            }
        });

        return res.render('material/material_form', {
            page: {
                name: "EditarM",
                type: "texto"
            },
            material
        });
    },

    async textoUpdate(req, res) {
        const { materialId } = req.params;
        let { txt_motivacional } = req.body;

        await Material.update({
            url_imagem: null,
            video_id: null,
            txt_motivacional: txt_motivacional,
        }, { where: { 
                id: materialId,
                profissional_id: req.session.profissionalId
           }}
        );

        return res.redirect('/texto/edit');
    },

    async textoDelete(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);

        if(!material) {
            return res.status(400).json({error: 'Texto not found'});
        }

        Material.destroy({ where: { 
            id: materialId,
            profissional_id: req.session.profissionalId
        }});

        return res.redirect('/texto/edit');
    },

    //Imagem
    async imagemAdd(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);
        return res.render('material/material_form', {
            page: {
                name: "Adicionar",
                type:  "imagem"
            },
            material
        });
    },

    async imagemStore(req, res) {
        let { url_imagem } = req.body;

        const material = await Material.create({ 
            url_imagem: url_imagem,
            video_id: null,
            txt_motivacional: null,
            profissional_id: req.session.profissionalId
        });

        return res.redirect('/imagem/edit');
    },

    async imagemEdit(req, res) {
        const { materialId } = req.params;

        const material = await Material.findAll({ 
            where: {
                profissional_id: req.session.profissionalId,
                id: materialId
            }
        });

        return res.render('material/material_form', {
            page: {
                name: "EditarM",
                type: "imagem"
            },
            material
        });
    },

    async imagemUpdate(req, res) {
        const { materialId } = req.params;
        let { url_imagem } = req.body;

        await Material.update({
            url_imagem: url_imagem,
            video_id: null,
            txt_motivacional: null,
        }, { where: { 
                id: materialId,
                profissional_id: req.session.profissionalId
           }}
        );

        return res.redirect('/imagem/edit');
    },

    async imagemDelete(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);

        if(!material) {
            return res.status(400).json({error: 'Texto not found'});
        }

        Material.destroy({ where: { 
            id: materialId,
            profissional_id: req.session.profissionalId
        }});

        return res.redirect('/imagem/edit');
    },

    //Video
    async videoAdd(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);
        return res.render('material/material_form', {
            page: {
                name: "Adicionar",
                type:  "video"
            },
            material
        });
    },

    async videoStore(req, res) {
        let { video_id } = req.body;

        const material = await Material.create({ 
            url_imagem: null,
            video_id: video_id,
            txt_motivacional: null,
            profissional_id: req.session.profissionalId
        });

        return res.redirect('/video/edit');
    },

    async videoEdit(req, res) {
        const { materialId } = req.params;

        const material = await Material.findAll({ 
            where: {
                profissional_id: req.session.profissionalId,
                id: materialId
            }
        });

        return res.render('material/material_form', {
            page: {
                name: "EditarM",
                type: "video"
            },
            material
        });
    },

    async videoUpdate(req, res) {
        const { materialId } = req.params;
        let { video_id } = req.body;

        await Material.update({
            url_imagem: null,
            video_id: video_id,
            txt_motivacional: null,
        }, { where: { 
                id: materialId,
                profissional_id: req.session.profissionalId
           }}
        );

        return res.redirect('/imagem/edit');
    },

    async videoDelete(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);

        if(!material) {
            return res.status(400).json({error: 'Texto not found'});
        }

        Material.destroy({ where: { 
            id: materialId,
            profissional_id: req.session.profissionalId
        }});

        return res.redirect('/video/edit');
    },
}