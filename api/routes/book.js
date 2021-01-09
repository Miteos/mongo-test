const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Book = require('../models/Book.js')

/* GET ALL BOOKS */
router.get('/book', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  })
})

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE BOOK */
router.post('/book', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* UPDATE BOOK */
router.put('/book/:id', function (req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE BOOK */
router.delete('/book/:id', function (req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
