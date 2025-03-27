import prisma from "../../prisma/client.js"

class NotasModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  }

  getAllById = async (req, res) => {
    return await prisma.nota.findUnique;

  }

  create = async (titulo, conteudo, favorita, cor) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor
      },
    });
  };
  
  update = async (id, titulo, conteudo, favorita, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: { 
          titulo,
          conteudo,
          favorita,
          cor
        },
      })
      return nota
    } catch (error) {
      console.log("Erro ao atualizar", error)
      throw error
    }
  };


  delete = async (id) => {
    try {
      const NotaDeletada = await prisma.nota.delete ({
        where: { id },
      });

      return NotaDeletada;
    } catch (error) {
      console.log("Erro ao deletar a nota!", error);
      throw error;
    }
  };
}
export default new NotasModel();
