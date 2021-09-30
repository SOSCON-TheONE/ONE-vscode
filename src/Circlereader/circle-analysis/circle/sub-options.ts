// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {ActivationFunctionType} from '../circle/activation-function-type';


export class SubOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SubOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSubOptions(bb: flatbuffers.ByteBuffer, obj?: SubOptions): SubOptions {
    return (obj || new SubOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSubOptions(bb: flatbuffers.ByteBuffer, obj?: SubOptions): SubOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SubOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  fusedActivationFunction(): ActivationFunctionType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
  }

  static startSubOptions(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addFusedActivationFunction(
      builder: flatbuffers.Builder, fusedActivationFunction: ActivationFunctionType) {
    builder.addFieldInt8(0, fusedActivationFunction, ActivationFunctionType.NONE);
  }

  static endSubOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createSubOptions(
      builder: flatbuffers.Builder,
      fusedActivationFunction: ActivationFunctionType): flatbuffers.Offset {
    SubOptions.startSubOptions(builder);
    SubOptions.addFusedActivationFunction(builder, fusedActivationFunction);
    return SubOptions.endSubOptions(builder);
  }
}
