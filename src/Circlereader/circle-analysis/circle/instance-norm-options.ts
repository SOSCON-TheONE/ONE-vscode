// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {ActivationFunctionType} from './activation-function-type';


export class InstanceNormOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): InstanceNormOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsInstanceNormOptions(bb: flatbuffers.ByteBuffer, obj?: InstanceNormOptions):
      InstanceNormOptions {
    return (obj || new InstanceNormOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsInstanceNormOptions(
      bb: flatbuffers.ByteBuffer, obj?: InstanceNormOptions): InstanceNormOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new InstanceNormOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  epsilon(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  fusedActivationFunction(): ActivationFunctionType {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
  }

  static startInstanceNormOptions(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addEpsilon(builder: flatbuffers.Builder, epsilon: number) {
    builder.addFieldFloat32(0, epsilon, 0.0);
  }

  static addFusedActivationFunction(
      builder: flatbuffers.Builder, fusedActivationFunction: ActivationFunctionType) {
    builder.addFieldInt8(1, fusedActivationFunction, ActivationFunctionType.NONE);
  }

  static endInstanceNormOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createInstanceNormOptions(
      builder: flatbuffers.Builder, epsilon: number,
      fusedActivationFunction: ActivationFunctionType): flatbuffers.Offset {
    InstanceNormOptions.startInstanceNormOptions(builder);
    InstanceNormOptions.addEpsilon(builder, epsilon);
    InstanceNormOptions.addFusedActivationFunction(builder, fusedActivationFunction);
    return InstanceNormOptions.endInstanceNormOptions(builder);
  }
}
