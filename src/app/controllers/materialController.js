const Material = require('../models/Material');
const Profissional = require('../models/Profissional');

module.exports = {
    async materialAdd(req, res) {
        const { profissionalId } = req.params;

        const profissional = await Profissional.findByPk(profissionalId);
        return res.render('material/material_form', {
            page: {
                name: "Adicionar"
            },
            profissional
        });
    },

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

    async store(req, res) {
        const { profissionalId } = req.params;
        let { url_imagem, video_id, txt_motivacional } = req.body;

        let profissional_id = profissionalId;

        const materiais = await Material.create({ url_imagem, video_id, txt_motivacional, profissional_id });

        return res.redirect(`/material/list/${profissionalId}`);
    },

    async materialEdita(req, res) {
        const { materialId, profissionalId } = req.params;

        const profissional = await Profissional.findByPk(profissionalId);
        const material = await Material.findAll({ 
            where: {
                profissional_id: profissionalId,
                id: materialId
            }
        });

        return res.render('material/material_form', {
            page: {
                name: "Editar"
            },
            material,
            profissional
        });
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
                name: "Editar",
                type: "texto"
            },
            material
        });
    },

    async update(req, res) {
        let { materialId, profissionalId } = req.params;
        let { url_imagem, video_id, txt_motivacional } = req.body;

        await Material.update({
            url_imagem: req.body.url_imagem,
            video_id: req.body.video_id,
            txt_motivacional: req.body.txt_motivacional,
            },
            { where: { id: req.params.materialId }}
        );

        return res.redirect(`/material/list/${profissionalId}`);
    },

    async delete(req, res) {
        const { materialId } = req.params;

        const material = await Material.findByPk(materialId);
        let profissionalId = material.profissional_id;

        if(!material) {
            return res.status(400).json({error: 'Material not found'});
        }

        Material.destroy({
            where: {id: req.params.materialId}
        })

        return res.redirect(`/material/list/${profissionalId}`);
    },

    async materialList(req, res) {
        const { profissionalId } = req.params;

        const profissional = await Profissional.findByPk(profissionalId);
        const materiais = await Material.findAll({ 
            where: { profissional_id: profissionalId }
        });

        return res.render('material/list', { 
            page: {
                name: "Listagem de Material",
                user: "Profissional"
            },
            materiais, 
            profissional 
        });
    }
}
