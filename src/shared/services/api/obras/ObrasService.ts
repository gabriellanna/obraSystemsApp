import { IResponseAPI } from "../../../models/base";
import { ObraInsertDto, ObraUpdateDto } from "../../../models/dtos/ObraDtos";
import { Obra } from "../../../models/Obra";
import { Api } from "../axios-config";



const insert = async (obra: ObraInsertDto): Promise<IResponseAPI<Obra[]>> => {

  const { data } = await Api.post('/obra', obra).catch(data => {
    return data.response;
  });

  return data;
};

const update = async (obra: ObraUpdateDto): Promise<IResponseAPI<Obra>> => {

  const { data } = await Api.put('/obra', obra).catch(data => {
    return data.response;
  });

  return data;
};

const getAll = async (): Promise<IResponseAPI<Obra[]>> => {

  const { data } = await Api.get("/obra").catch(data => {
    return data.response;
  });

  return data;
};

const getById = async (id: number): Promise<IResponseAPI<Obra>> => {

  const { data } = await Api.get(`/obra/${id}`).catch(data => {
    return data.response;
  });

  return data;
};

export const ObraService = {
  insert,
  update,
  getAll,
  getById,
};