import { Injectable } from '@nestjs/common';
import { CloudinaryResponse } from './types';
import { v2 as cloudinary } from 'cloudinary';
// import streamifier from 'streamifier';
import toStream = require('buffer-to-stream');

cloudinary.config({
  cloud_name: 'fomo-djbhpg8sh',
  api_key: '369344517473252',
  api_secret: 'zk7N_hmYKTTALbMXHoh_gn7nMWM',
});

@Injectable()
export class CloudinaryService {
  upload(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      toStream(file.buffer).pipe(uploadStream);
    });
  }
}
